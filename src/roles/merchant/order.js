const Role = require('../fundamental');

class Order extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
        this.shipment(orderId) = {
            /**
             * Retrieve shipment of specific order
             * 
             * @param {String} orderId
             * 
             * Examples:
             * 
             *  os.merchant.order.shipment('ac3264cd24eedc2424cce').get()
             * 
             */
            get : () => this.request.get(`${this.baseURL}/orders/${orderId}/shipments`, {}, this.credentials),
            /**
             * Arrange pickup time
             * 
             * @param {Object} context
             * @param {String} context[preferred_date]
             * @param {String} context[preferred_max_time]
             * @param {String} context[preferred_min_time]
             * 
             * Examples:
             * 
             *  os.merchant.order.shipment('ac3264cd24eedc2424cce').pickup('234121',{preferred_date:'2019-10-23',
             *  preferred_min_time:'2019-10-23T10:00',preferred_max_time:'2019-10-23T18:00'})
             * 
             */
            pickup: (shipmentId, context) => this.request.put(`${this.baseURL}/orders/${orderId}/shipments/${shipmentId}`, context || {}, this.credentials),
        }
    }

    /**
     * 
     * @param {Object} query 
     * @param {String} query[page]
     * @param {String} query[customers] // customer (user) id(s)
     * @param {String} query[statuses] // 'PENDING' | 'PAID' | 'PROCESSING' | 'SHIPPING' | 'COMPLETED' | 'CANCELLED'
     * @param {String} query[ids] // order id(s)
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL orders form your shop
     * 
     *  os.merchant.order.get({page:'1'}) 
     * 
     *  // Get orders form your shop using filters
     * 
     *  os.merchant.order.get({consumers:'231,2232',statuses:'PAID,PROCESSING',ids:'ac223c2354eedc2756e',page:'1'}) 
     * 
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
     * 
     * Examples:
     * 
     *  os.merchant.order.update('ac3264cd24eedc2424cce',{
     *  notes:"Please ask customer sign to invoice first. Thanks",
     *  shipment:'1/F GoGo Building, 12 Hoi Hoi Road, KT, KLN, HK'})
     * 
     */
    update(orderId, context){
        return this.request.put(`${this.baseURL}/orders/${orderId}`, context || {}, this.credentials)
    }

}

module.exports = Order;