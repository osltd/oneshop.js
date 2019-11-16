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
     */
    update(context){
        return this.request.put(`${this.baseURL}/businesses/session`, context || {}, this.credentials);
    }

    /**
     * DANGER: delete shop, this action cannot be undone
     */
    delete(){
        return this.request.delete(`${this.baseURL}/businesses/session`, context || {}, this.credentials);
    }

}

module.exports = Shop;