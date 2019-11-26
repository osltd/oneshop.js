const Role = require('../fundamental');

class Session extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Login
     * @param {Object} credentials
     * @param {String} credentials[email]
     * @param {String} credentials[phone]
     * @param {String} credentials[passwd]
     * 
     * Examples:
     * 
     *  // Either 'phone' or 'email'  together with 'passwd' value to get token (session key)
     * 
     *  // 'phone' + 'passwd'
     * 
     *  os.mall.session.create({phone:'+85299887766',passwd:'12ab5678ij'})
     * 
     *  // 'email' + 'passwd'
     * 
     *  os.mall.session.create({email:'test@oneshop.cloud',passwd:'12ab5678ij'})
     * 
     */
    create(credentials){
        return this.request.post(`${this.baseURL}/sessions`, credentials || {}, this.credentials);
    }

}

module.exports = Session;