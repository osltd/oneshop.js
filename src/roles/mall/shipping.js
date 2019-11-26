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
     * 
     * Examples:
     * 
     *  os.mall.shipping.rate([{
     *          id:625,
     *          product:{
     *              id:'cad28564dee135464dab',
     *              name:'Banana'
     *          },
     *          sku:'tk_1',
     *          option:'color:Color,yellow:Yellow',
     *          quantity:5,
     *          photos:[ 
     *              { 
     *                  url:'https://assets.oneshop.cloud/..png',
     *                  ext:'png'
     *              }
     *          ]
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
     *  os.mall.shipping.timeslot({
     *              id:254,
     *              name:'OneShop Express',
     *              total_charge:5,
     *              remarks:'Please sign first when get the delivery',
     *              can_pickup:true
     *          })
     * 
     */
    timeslot(courier){
        return this.request.get(`${this.baseURL}/couriers/${courier}/timeslots`, { }, this.credentials);
    }

}

module.exports = Shipping;