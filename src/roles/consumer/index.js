/**
 *  Exports modules methods
 */
class Consumer {
    constructor(baseURL, credentials){
        // export modules
        this.signature = new (require('./signature'))(baseURL, credentials, 'consumer');
        this.credential = new (require('./credential'))(baseURL, credentials, 'consumer');
        this.message = new (require('./message'))(baseURL, credentials, 'consumer');
        this.notification = new (require('./notification'))(baseURL, credentials, 'consumer');
        this.payment = new (require('./payment'))(baseURL, credentials, 'consumer');
        this.project = new (require('./project'))(baseURL, credentials, 'consumer');
        this.feed = new (require('./feed'))(baseURL, credentials, 'consumer');
        this.repository = new (require('./repository'))(baseURL, credentials, 'consumer');
        this.session = new (require('./session'))(baseURL, credentials, 'consumer');
        this.profile = new (require('./profile'))(baseURL, credentials, 'consumer');
    }
}

module.exports = Consumer;