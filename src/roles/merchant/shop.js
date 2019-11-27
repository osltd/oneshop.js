const Role = require('../fundamental');

class Shop extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Returns profile of specific shop
     * 
     * Examples:
     * 
     *  os.merchant.shop.profile()
     * 
     */
    profile(){
        return this.request.get(`${this.baseURL}/businesses/session`, {}, this.credentials);
    }

    /**
     * Updates shop settings
     * @param {Object} context 
     * @param {String} context[name]
     * @param {String} context[description]
     * @param {String} context[address]
     * @param {String} context[tags]
     * @param {String} context[lowest_stock_limit]
     * @param {String} context[refund_days]
     * @param {String} context[currency]
     * @param {String} context[payout_swift_code]
     * @param {String} context[payout_account_no]
     * @param {String} context[icon]
     * @param {Integer} context[seats]
     * 
     * Examples:
     * 
     *  // update specified values in the shop profile
     * 
     *  os.merchant.shop.update({
     *      name:'yourshop',
     *      description:'Shop descriptions.',
     *      address:'1/F, Camel Building Block 1, 6 Hoi Yuen Road, Kwun Tong, Kowloon, Hong Kong',
     *      tags:'your,shop,is,awesome',
     *      seats:60,
     *      lowest_stock_limit:10,
     *      refund_days:14,
     *      currency:'HKD',
     *      payout_swift_code:'792',
     *      payout_account_no:'0123456',
     *      icon:'https://cdn.oneshop.cloud/.......png'
     *  })
     * 
     * 
     */
    update(context){
        return this.request.put(`${this.baseURL}/businesses/session`, context || {}, this.credentials);
    }

    /**
     * DANGER: delete shop, this action cannot be undone
     * 
     * Examples:
     * 
     *  os.merchant.shop.delete()
     * 
     */
    delete(){
        return this.request.delete(`${this.baseURL}/businesses/session`, context || {}, this.credentials);
    }

}

module.exports = Shop;