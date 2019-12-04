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
     * 
     * Examples:
     * 
     *  // Create consumer without shop id
     * 
     *  os.mall.consumer.add({confpasswd:'12345678',passwd:'12345678',first_name:'One',last_name:'Shop',
     *  phone:'+85299887766',email:'test@oneshop.cloud'})
     * 
     *  // Create consumer with shop id
     * 
     *  os.mall.consumer.add({confpasswd:'12345678',passwd:'12345678',first_name:'One',last_name:'Shop',
     *  phone:'+85299887766',email:'test@oneshop.cloud'},522)
     * 
     */
    add(consumer, shopId){
        return this.request.post(
            !/^[0-9]+$/.test(shopId) ? `${this.baseURL}/consumers`:`${this.baseURL}/shops/${shopId}/consumers`,
            consumer,
            this.credentials
        );
    }

    /* ------------ Old --------
     * Retrieve mall articles
     * @param {String} profile
     * @param {Integer} page
     */

     /* --------- New -------*/
     /**
     * Retrieve mall consumers
     * @param {Object} query
     * @param {String} query[email] 
     * @param {String} query[custom_profile_field] // custom values you want e.g profile[gender], profile[phone]
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL consumers form your own mall
     * 
     *  os.mall.consumer.get({page:'1'}) 
     * 
     *  // Get specified consumers with filters (custom key value from profile) form your own mall
     * 
     *  os.mall.consumer.get({email:'test@oneshop.cloud',gender:'M',page:'1'}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/consumers`, query || {}, this.credentials);
    }

}

module.exports = Consumer;