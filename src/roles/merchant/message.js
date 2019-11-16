const Role = require('../fundamental');

class Message extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }



    /**
     * 
     * Get chats of your shop from consumers
     * 
     * @param {Object} query
     * @param {Integer} query[page]
     * 
     */
    enquirer(query){
        return this.request.get(`${this.baseURL}/enquirers`, query || {}, this.credentials);
    }

    /**
     * Get messages from specifc enquirer
     * 
     * @param {Integer} enquirerId
     * @param {Object} query
     * @param {Integer} query[page]
     * 
     */
    get(enquirerId, query){
        return this.request.get(`${this.baseURL}/enquirers/${enquirerId}/messages`, query || {}, this.credentials);
    }


    /**
     * 
     * Send message to specific enquirer
     * 
     * @param {Integer} enquirerId
     * @param {Object} context 
     * @param {String} context[context] (any string your want)
     * @param {String} context[attachments] (url seperated by comma)
     * 
     */
    send(enquirerId, context){
        return this.request.post(`${this.baseURL}/enquirers/${enquirerId}/messages`, context || {}, this.credentials);
    }



}

module.exports = Message;