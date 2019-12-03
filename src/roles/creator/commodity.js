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
     * @param {String} query[page]
     * @param {String} query[ids]
     * @param {String} query[locale]
     * @param {String} query[type]
     * @param {String} query[shops]
     * @param {String} query[keywords]
     * @param {String} query[permission]
     * 
     * Examples:
     *  
     *  // ALL filtering value are optional
     * 
     *  // Retrieve ALL products
     * 
     *  os.creator.commodity.get({page:'1'}) 
     * 
     *  // Retrieve some products with filtering
     * 
     *  os.creator.commodity.get({ids:'1763,2845,411',locate:'zh_HK',type:'PHYSICAL',shop:'4333',keywords:'love',permission:'VIEWER',page:'1'}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/commodities`, query || {}, this.credentials);
    }

}

module.exports = Backlog;