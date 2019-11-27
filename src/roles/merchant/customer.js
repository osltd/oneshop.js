const Role = require('../fundamental');

class Customer extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

   
    /**
     * Retrieve customer from your shop
     * 
     * @param {Object} query
     * @param {Integer} query[page]
     * @param {String} query[ids] (e.g 1234,5678)
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL customer form your shop
     * 
     *  os.merchant.customer.get({page:1}) 
     * 
     *  // Get customers form your shop using filters
     * 
     *  os.merchant.customer.get({ids:'1234,5678',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/customers`, query || {}, this.credentials);
    }

    /**
     * Update customer profile by id
     * 
     * @param {Integer} customerId 
     * @param {Object} profile 
     * @param {String} profile[*]
     * 
     * // 'passswd' and 'confpasswd' must need to use together for change the coustomer password.
     * 
     * Examples:
     * 
     *  // you can add custom fields you wants
     * 
     *  os.merchant.consumer.update(4323,{
     * 
     *      // Default values
     * 
     *      passwd:'12344321',confpasswd:'12344321',tags:'tag1,tag2,tag3',
     * 
     *      // custom values
     *      
     *      first_name:'One',last_name:'Shop',gender:'M'
     * 
     *  }) 
     * 
     * 
     */
    update(customerId, profile){
        return this.request.put(`${this.baseURL}/customers/${customerId}`, profile || {}, this.credentials);
    }

}

module.exports = Customer;