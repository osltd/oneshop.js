const Role = require('../fundamental');

class Business extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve shops you own
     * @param {Object} query 
     * @param {String} query[ids] 
     * @param {String} query[tags]
     */
    get(query){
        return this.request.get(`${this.baseURL}/businesses`, query || {}, this.credentials);
    }

    /**
     * 
     * @param {Object} info
     * @param {Integer} info[channel] (required)
     * @param {String} info[name] (required)
     * @param {String} info[description] (required)
     * @param {String} info[voucher]
     * @param {String} info[tags]
     * @param {String} info[icon]
     */
    create(info){
        return this.request.create(`${this.baseURL}/businesses`, info || {}, this.credentials);
    }

}

module.exports = Business;