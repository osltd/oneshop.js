/**
 *  Exports modules methods
 */
class Mall {
    constructor(baseURL, credentials){
        // export modules
        this.article = new (require('./article'))(baseURL, credentials, 'mall');
        this.consumer = new (require('./consumer'))(baseURL, credentials, 'mall');
        this.merchandise = new (require('./merchandise'))(baseURL, credentials, 'mall');
        this.merchant = new (require('./merchant'))(baseURL, credentials, 'mall');
        this.order = new (require('./order'))(baseURL, credentials, 'mall');
        this.shipping = new (require('./shipping'))(baseURL, credentials, 'mall');
        this.session = new (require('./session'))(baseURL, credentials, 'mall');
        this.shop = new (require('./shop'))(baseURL, credentials, 'mall');
        this.validation = new (require('./validation'))(baseURL, credentials, 'mall');
        this.voucher = new (require('./voucher'))(baseURL, credentials, 'mall');
    }
}

module.exports = Mall;