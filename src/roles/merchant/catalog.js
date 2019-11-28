const Role = require('../fundamental');

class Catalog extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve catalog of your shop
     * 
     * @param {Object} query
     * @param {String} query[ids] // catalog id(s)
     * @param {String} query[page]
     * @param {String} query[ownership] // 'self' | 'others'
     * @param {String} query[type] // 'physical' | 'virtual'
     * @param {String} query[tags] (e.g. shoes,clothes)
     * @param {String} query[skus] (e.g. sneaker_blue_43, sneaker_blue_41)
     * @param {String} query[keywords] (e.g. sneaker)
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL catalog form your shop
     * 
     *  os.merchant.catalog.get({page:1}) 
     * 
     *  // Get catalog form your shop using filters
     * 
     *  os.merchant.catalog.get({ids:'23,53,22',ownership:'OTHERS',type:'PHYSICAL',tags:'shoes,clothes'
     *  skus:'sneaker_blue_43',keywords:'sneaker',page:1})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/displays`, query || {}, this.credentials);
    }

}

module.exports = Catalog;