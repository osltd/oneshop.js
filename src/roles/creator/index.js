/**
 *  Exports modules methods
 */
class Creator {
    constructor(baseURL, credentials){
        // export modules
        this.backlog = new (require('./backlog'))(baseURL, credentials, 'consumer');
        this.business = new (require('./business'))(baseURL, credentials, 'consumer');
        this.commodity = new (require('./commodity'))(baseURL, credentials, 'consumer');
        this.feed = new (require('./feed'))(baseURL, credentials, 'consumer');
        this.mall = new (require('./mall'))(baseURL, credentials, 'consumer');
        this.product = new (require('./product'))(baseURL, credentials, 'consumer');
        this.stat = new (require('./stat'))(baseURL, credentials, 'consumer');
        this.variant = new (require('./variant'))(baseURL, credentials, 'consumer');
    }
}

module.exports = Creator;