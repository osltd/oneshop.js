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
     */
    update(customerId, profile){
        return this.request.put(`${this.baseURL}/customers/${customerId}`, profile || {}, this.credentials);
    }

}

module.exports = Customer;