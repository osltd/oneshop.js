const Role = require('../fundamental');

class Consumer extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Create consumer
     * @param {*} consumer 
     * @param {*} shopId 
     */
    add(consumer, shopId){
        return this.request.post(
            !/^[0-9]+$/.test(shopId) ? `${this.baseURL}/consumers`:`${this.baseURL}/shops/${shopId}/consumers`,
            consumer,
            this.credentials
        );
    }

    /**
     * Retrieve mall articles
     * @param {String} profile
     * @param {Integer} page
     */
    get(query){
        return this.request.get(`${this.baseURL}/consumers`, query || {}, this.credentials);
    }

}

module.exports = Consumer;