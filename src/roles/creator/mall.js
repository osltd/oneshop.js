const Role = require('../fundamental');

class Mall extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve mall's own by you
     * @param {Object} query
     * @param {String} query[ids]
     * @param {String} query[keywords]
     * @param {String} query[tags]
     */
    get(query){
        return this.request.get(`${this.baseURL}/malls`, query || {}, this.credentials);
    }

}

module.exports = Mall;