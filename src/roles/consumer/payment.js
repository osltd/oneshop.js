const Role = require('../fundamental');

class Payment extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    
    /**
     * Buy something with payment credentials
     * @param {Array} items
     * @param {String} coupons
     * @param {Object} contact
     * @param {String} notes
     * @param {Object} payment
     * @param {String} shipping
     */
    pay(context){
        return this.request.post(`${this.baseURL}/payments`, context, this.credentials);
    }


    /**
     * Retrieve payment history
     * @param {Object} query
     * @param {String} query[merchants]
     * @param {Integer} query[page]
     */
    get(query){
        return this.request.get(`${this.baseURL}/payments`, query || {}, this.credentials);
    }


}

module.exports = Payment;