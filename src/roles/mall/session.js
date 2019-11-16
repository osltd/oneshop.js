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
     * @param {String} credentials[email]
     * @param {String} credentials[phone]
     * @param {String} credentials[passwd]
     */
    create(credentials){
        return this.request.post(`${this.baseURL}/sessions`, credentials || {}, this.credentials);
    }

}

module.exports = Session;