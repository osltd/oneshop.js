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
     * Logout by destroy session
     */
    destroy(){
        return this.request.delete(`${this.baseURL}/consumers/session`, {}, this.credentials);
    }

}

module.exports = Session;