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
     * @param {Object} orderPayload
     * @param {Array} orderPayload[items]
     * @param {String} orderPayload[coupons]
     * @param {Object} orderPayload[contact]
     * @param {String} orderPayload[notes]
     * @param {Object} orderPayload[payment]
     * @param {String} orderPayload[shipping]
     * 
     * Examples:
     * 
     *  os.mall.order.create({
     *      coupons:'ONESHOP10OFF',
     *      notes:'Please check the package pack well.',
     *      shipping:'1/F Block 1, Camcam Paint Building, 62 Hoi Yuen Road, Kwun Tong',
     *      items:[{
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
     *      }],
     *      contact:{
     *          email:'test@oneshop.cloud',
     *          phone:'+85293456789',
     *          address:'1/f, Block 1, Camel Paint Building, 62 Hoi Yuen Road, Kwun Tong'
     *      },
     *      payment:{
     *          card:'4242424242424242',
     *          csc:'123',
     *          exp_date:'01/23'
     *      }
     *  })
     * 
     */
    create(orderPayload){
        return this.request.post(`${this.baseURL}/orders`, orderPayload || {}, this.credentials);
    }

}

module.exports = Order;