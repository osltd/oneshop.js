const Role = require('../fundamental');

class Backlog extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve user's products
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[locale]
     * @param {String} query[type]
     * @param {String} query[shops]
     * @param {String} query[keywords]
     * @param {String} query[permission]
     */
    get(query){
        return this.request.get(`${this.baseURL}/commodities`, query || {}, this.credentials);
    }

}

module.exports = Backlog;