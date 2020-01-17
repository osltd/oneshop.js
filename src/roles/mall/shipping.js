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
     * Retrieve shipping rate
     * @param {Array} items
     * @param {String} address
     * 
     * Examples:
     * 
     *  os.mall.shipping.rate([{
     *          id:625,
     *          qty:5,
     *      }], 'Rm 101, Blk 2, Good Buinding, Kwun Tong, KLN, HK')
     * 
     */
    rate(items, address){
        return this.request.post(`${this.baseURL}/shipments/rates`, { items : items, shipping : { address : address }}, this.credentials);
    }

    /**
     * Retrieve timeslots of specific courier
     * @param {*} courier
     * 
     * Examples:
     * 
     *  os.mall.shipping.timeslot("80h2480-29gh82gh-13081y4f-98h21")
     * 
     */
    timeslot(courier){
        return this.request.get(`${this.baseURL}/couriers/${courier}/timeslots`, { }, this.credentials);
    }

}

module.exports = Shipping;