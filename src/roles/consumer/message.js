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
     * Retrieve enquiries from shops
     * @param {Object} query 
     * 
     * Examples:
     * 
     *  // get ALL enquiries list :
     * 
     *  os.consumer.message.enquiries()  
     * 
     *  // get enquiries list with specified enquiry ids :
     * 
     *  os.consumer.message.enquiries({ids:'2123,2125,2127'})
     * 
     */
    enquiries(query){
        return this.request.get(`${this.baseURL}/signatures`, query || {}, this.credentials);
    }

    
    /**
     * Retrieve messages between a shop and consumer
     * @param {Integer} shopId 
     * @param {Object} query
     * @param {Integer} query[page]
     * 
     * Examples:
     *  os.consumer.message.get('2123',{page:1})
     * 
     */
    get(shopId, query){
        return this.request.get(`${this.baseURL}/shops/${shopId}/messages`, query || {}, this.credentials);
    }


    /**
     * Send message to shop
     * @param {Object} context 
     * @param {String} context[content]
     * @param {String} context[attachments]
     * 
     * Examples:
     *  os.consumer.message.send('2123',{content:'Hi, I am a man.',attachment:'https://assets.oneshop.cloud/..png'})
     * 
     */
    send(shopId, context){
        return this.request.post(`${this.baseURL}/shops/${shopId}/messages`, context || {}, this.credentials);
    }

}

module.exports = Message;