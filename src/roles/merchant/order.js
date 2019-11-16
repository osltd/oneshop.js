const Role = require('../fundamental');

class Order extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
        this.shipment = {
            /**
             * Retrieve shipment of specific order
             * 
             * @param {String} orderId
             * 
             */
            get : (orderId) => this.request.get(`${this.baseURL}/orders/${orderId}/shipments`, {}, this.credentials),
            /**
             * Arrange pickup time
             * 
             * @param {Object} context
             * @param {String} context[preferred_date]
             * @param {String} context[preferred_max_time]
             * @param {String} context[preferred_min_time]
             * 
             */
            pickup: (shipmentId, context) => this.request.put(`${this.baseURL}/orders/${orderId}/shipments/${shipmentId}`, context || {}, this.credentials),
        }
    }

    /**
     * 
     * @param {Object} query 
     * @param {Integer} query[page]
     * @param {String} query[customers]
     * @param {String} query[statuses]
     * @param {String} query[ids]
     */
    get(query){
        return this.request.get(`${this.baseURL}/orders`, query || {}, this.credentials)
    }

    /**
     * 
     * @param {String} orderId 
     * @param {Object} context
     * @param {String} context[notes]
     * @param {String} context[shipment]
     */
    update(orderId, context){
        return this.request.put(`${this.baseURL}/orders/${orderId}`, context || {}, this.credentials)
    }

}

module.exports = Order;