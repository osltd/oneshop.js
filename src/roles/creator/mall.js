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
     * @param {String} query[ids] // mall id(s)
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * 
     * Examples:
     * 
     *  // ALL filter values are optional
     * 
     *  // Get ALL malls list.
     * 
     *  os.creator.mall.get()
     * 
     *  // Get specified malls with filters
     *  os.creator.mall.get({ids:'12,45',keywords:'shop',tags:'tag1,tag2,tag3'})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/malls`, query || {}, this.credentials);
    }

}

module.exports = Mall;