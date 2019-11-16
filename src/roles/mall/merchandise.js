const Role = require('../fundamental');

class Merchandise extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve merchandises
     * @param {String} ids
     * @param {String} shops
     * @param {String} skus
     * @param {String} tags
     * @param {String} locale
     * @param {String} keywords
     * @param {Integer} page
     */
    get(query){
        return this.request.get(`${this.baseURL}/merchandises`, query || {}, this.credentials);
    }

}

module.exports = Merchandise;