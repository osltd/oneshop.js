const request = require('request');
const qs      = require('qs');
const env     = require('browser-or-node');

const nodeRequest = (method, url, body, query, tokens) => new Promise((resolve, reject) => {
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


const browserRequest = (method, url, body, query) => new Promise((resolve, reject) => {
    // 
    if((url || "").startsWith("https://api.oneshop.cloud")) throw "You should not use https://api.oneshop.cloud to call Oneshop API, it's very dangerous if you expose the credentials of your mall.";
    // set payload
    let payload = {
        method  : method,
        headers : {
            "Content-Type" : "application/json"
        }
    }
    // has body?
    if(/^POST|PUT$/i.test(method)){
        payload.body = JSON.stringify(body);
    };
    // make request
    fetch(url + (Object.keys(query || {}).length ? `?${qs.stringify(query)}` : ""), payload)
    // parse json
    .then(response => response.json())
    // 
    .then(result => resolve(/^GET$/i.test(method) && Array.isArray((result.data || {}).rows) ? result.data.rows : (result.data || (result.messages || true))))
    // error?
    .catch(error => {
        // setup error message container
        let messages = [];
        // process error
        if(typeof error == 'string'){
            // setup message container
            messages.push(error);
        } else if(typeof error == 'array') {
            messages = messages.concat(error).filter(n => n);
        }
        reject({
            code    : (response || {}).statusCode || 500,
            message : messages
        });
    });
});

// call
const call = (method, url, body, query, tokens) => {
    if(env.isNode && !url.startsWith('https://api.oneshop.cloud')){
        throw "The API endpoint is not allow to change under Node environment."
    }
    return env.isNode ? nodeRequest(method, url, body, query, tokens) : browserRequest(method, url, body, query); 
}

module.exports =  {
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    post   : (url, body, credentials) => call('POST', url, body, {}, credentials),
    /**
    * @param {url}
    * @param {query}
    * @param {user,pass}
    */
    get    : (url, query, credentials) => call('GET', url, {}, query, credentials),
    /**
    * @param {url}
    * @param {body}
    * @param {user,pass}
    */
    put    : (url, body, credentials) => call('PUT', url, body, {}, credentials),
    /**
    * @param {url}
    * @param {user,pass}
    */
    delete : (url, credentials) => call('DELETE', url, {}, {}, credentials)
};
