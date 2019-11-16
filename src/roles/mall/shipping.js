const Role = require('../fundamental');

class Shipping extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve merchandises
     * @param {Array} items
     * @param {String} address
     */
    rate(items, address){
        return this.request.post(`${this.baseURL}/shipments/rates`, { items : items, shipping : { address : address }}, this.credentials);
    }

    /**
     * Retrieve timeslots of specific courier
     * @param {*} courier
     */
    timeslot(courier){
        return this.request.get(`${this.baseURL}/couriers/${courier}/timeslots`, { }, this.credentials);
    }

}

module.exports = Shipping;