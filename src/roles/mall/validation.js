const Role = require('../fundamental');

class Validation extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Create validation
     * @param {Object} context[email]
     * @param {Object} context[phone]
     * @param {String} type
     */
    create(context, shopId){
        return this.request.post(
            !/^[0-9]+$/.test(shopId) ? `${this.baseURL}/validations`:`${this.baseURL}/shops/${shopId}/validations`,
            context,
            this.credentials
        );
    }

    /**
     * consume validation
     * @param {String} context[code]
     * @param {String} context[passwd]
     * @param {String} context[confpasswd]
     */
    consume(context, shopId){
        return this.request.put(
            !/^[0-9]+$/.test(shopId) ? `${this.baseURL}/validations`:`${this.baseURL}/shops/${shopId}/validations`,
            context,
            this.credentials
        );
    }

}

module.exports = Validation;