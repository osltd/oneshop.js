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
     * 
     * Examples:
     * 
     *  os.consumer.payment.pay({
     * 
     *  items:[{
     *      id:'08h25glao8h03ipwui9202ty48jfhum4x',
     *      qty:3,
     *      courier:'80h2480-29gh82gh-13081y4f-98h21'
     *  }],
     * 
     *  contact:{
     *      address:'1/F, Camelpaint building, block 1, 62 Hoi Yuen Road, Kwun Tong, Hong Kong',
     *      email:'rocks@oneshop.team',
     *      first_name:'One',
     *      last_name:'Shop',
     *      phone:'+85236202322'
     *  },
     * 
     *  payment:{
     *      card:'4242-4242-4242-4242',
     *      csc:'123',
     *      exp_date:'01/23'
     *  },
     * 
     *  coupon:'ONESHOP10OFF',note:'Please delivery within two days later',
     * 
     *  shipping:'1/F, Camelpaint building, block 1, 62 Hoi Yuen Road, Kwun Tong, Hong Kong'
     * 
     *  })
     * 
     */
    pay(context){
        return this.request.post(`${this.baseURL}/payments`, context, this.credentials);
    }


    /**
     * Retrieve payment history
     * @param {Object} query
     * @param {String} query[merchants]
     * @param {Integer} query[page]
     * 
     * Examples:
     *  os.consumer.payment.get({merchants:'2ec37564bcad2343edacc',page:1})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/payments`, query || {}, this.credentials);
    }


}

module.exports = Payment;