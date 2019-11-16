const Role = require('../fundamental');

class Merchant extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve merchant profiles (Deprecated soon)
     * @param {String} profile
     */
    get(query){
        return this.request.get(`${this.baseURL}/merchants`, query || {}, this.credentials);
    }

}

module.exports = Merchant;