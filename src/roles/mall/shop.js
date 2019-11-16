const Role = require('../fundamental');

class Shop extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Update shop
     * @param {*} consumer 
     * @param {*} shopId 
     */
    update(shopId, status){
        return this.request.put(`${this.baseURL}/shops/${shopId}`, status, this.credentials);
    }

    /**
     * Retrieve mall's shops
     * @param {String} domain
     * @param {String} ids
     * @param {Integer} page
     */
    get(query){
        return this.request.get(`${this.baseURL}/shops`, query || {}, this.credentials);
    }

}

module.exports = Shop;