/**
 *  Exports modules methods
 */
class Merchant {
    constructor(baseURL, credentials){
        // export modules
        this.shop = new (require('./shop'))(baseURL, credentials, 'merchant');
        this.theme = new (require('./theme'))(baseURL, credentials, 'merchant');
        this.coupon = new (require('./coupon'))(baseURL, credentials, 'merchant');
        this.customer = new (require('./customer'))(baseURL, credentials, 'merchant');
        this.catalog = new (require('./catalog'))(baseURL, credentials, 'merchant');
        this.domain = new (require('./domain'))(baseURL, credentials, 'merchant');
        this.message = new (require('./message'))(baseURL, credentials, 'merchant');
        this.item = new (require('./item'))(baseURL, credentials, 'merchant');
        this.order = new (require('./order'))(baseURL, credentials, 'merchant');
        this.post = new (require('./post'))(baseURL, credentials, 'merchant');
        this.teammate = new (require('./teammate'))(baseURL, credentials, 'merchant');
    }
}

module.exports = Merchant;