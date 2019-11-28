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
     * @param {Object} query
     * @param {String} query[any_profile_field] // custom values you want e.g query[gender], query[phone]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL merchants form your own mall
     * 
     *  os.mall.merchant.get({page:1}) 
     * 
     *  // Get specified merchants with filters (custom key value from profile) form your own mall
     *  os.mall.merchant.get({gender:'M',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/merchants`, query || {}, this.credentials);
    }

}

module.exports = Merchant;