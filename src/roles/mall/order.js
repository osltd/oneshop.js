const Role = require('../fundamental');

class Order extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Create order with payment credentials
     * @param {Array} items
     * @param {String} coupons
     * @param {Object} contact
     * @param {String} notes
     * @param {Object} payment
     * @param {String} shipping
     */
    create(orderPayload){
        return this.request.post(`${this.baseURL}/orders`, orderPayload || {}, this.credentials);
    }

}

module.exports = Order;