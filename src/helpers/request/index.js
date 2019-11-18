const request = require('request');
const qs      = require('qs');

const makeRequest = (method, url, body, query, tokens) => new Promise((resolve, reject) => {
    // setup payload
    let payload = {
        url    : url + (Object.keys(query || {}).length ? `?${qs.stringify(query)}` : ""),
        method : method,
        headers : {
            "Content-Type"  : "application/x-www-form-urlencoded",
            "Authorization" : `Basic ${Buffer.from([tokens.user || '',tokens.pass || ''].join(':')).toString('base64')}`
        }
    };
    // has body?
    if(/^POST|PUT$/i.test(method)){
        payload.body = JSON.stringify(body);
    }
    // make request
    request(payload, (error, response, body) => {
        // error occurred
        if(error || response.statusCode > 200){
            // setup error message container
            let messages = [];
            // process error
            if(typeof error == 'string'){
                // setup message container
                messages.push(error);
            } else if(typeof error == 'array') {
                messages = messages.concat(error).filter(n => n);
            } else if(!error){
                // try to parse body
                try{ body = JSON.parse(body) } catch(e) { body = body || '' }
                // handle error
                if(/^401 Unauthorized$/.test(body)){
                    messages.push('Permission denied: Wrong credentials.');
                } else if(typeof body == 'object' && Array.isArray(body.messages)){
                    messages = body.messages;
                }
            };
            reject({
                code    : (response || {}).statusCode || 500,
                message : messages
            });
        } else { 
            // setup result container
            let result = {};
            // parse json
            try{ result = JSON.parse(body) } catch(e) { result = null } finally { result = result || {}}
            // done
            resolve(/^GET$/i.test(method) && Array.isArray((result.data || {}).rows) ? result.data.rows : (result.data || (result.messages || true)));
        }
    });
});



module.exports =  {
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    post   : (url, body, credentials) => makeRequest('POST', url, body, {}, credentials),
    /**
    * @param {url}
    * @param {query}
    * @param {user,pass}
    */
    get    : (url, query, credentials) => makeRequest('GET', url, {}, query, credentials),
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    put    : (url, body, credentials) => makeRequest('PUT', url, body, {}, credentials),
    /**
    * @param {url}
    * @param {user,pass}
    */
    delete : (url, credentials) => makeRequest('DELETE', url, {}, {}, credentials)
};
