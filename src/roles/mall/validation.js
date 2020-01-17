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
     * @param {Object} context
     * @param {Object} context[email]
     * @param {Object} context[phone]
     * @param {String} type // (value : CODE || LINK)
     * @param {Integer} shopId
     * 
     * Examples:
     * 
     * // create validation by either 'email' or 'phone'
     * 
     * -------- Contain shopId
     * 
     * // By 'email'
     * 
     * os.mall.validation.create({email:'test@oneshop.cloud',type:'CODE'},532)
     * 
     * // By 'phone'
     * 
     * os.mall.validation.create({phone:'+85299887766',type:'LINK'},532)
     * 
     * -------- Without shopId
     * 
     * // By 'email'
     * 
     * os.mall.validation.create({email:'test@oneshop.cloud',type:'LINK'},null)
     * 
     * // By 'phone'
     * 
     * os.mall.validation.create({phone:'+85299887766',type:'CODE'},null)
     * 
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
     * @param {Object} context
     * @param {String} context[code]
     * @param {String} context[passwd]
     * @param {String} context[confpasswd]
     * 
     * Examples:
     * 
     *  os.mall.validation.consume({code:'ejsxde23vfc39c',passwd:'123321',confpasswd:'123321'},532)
     * 
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