const Role = require('../fundamental');

class Repository extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Fetch user repositories
     * @param {Object} query
     * @param {Integer} query[page]
     */
    get(query){
        return this.request.get(`${this.baseURL}/repositories`, query || {}, this.credentials);
    }

}

module.exports = Repository;