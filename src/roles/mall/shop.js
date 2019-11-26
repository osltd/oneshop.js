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
     * @param {*} consumer (Not used)
     * @param {*} shopId 
     * @param {*} status 
     * 
     * Examples:
     * 
     *  os.mall.shop.update(532, 'ACTIVE')
     * 
     */
    update(shopId, status){
        return this.request.put(`${this.baseURL}/shops/${shopId}`, status, this.credentials);
    }

    /**
     * Retrieve mall's shops
     * @param {String} domain
     * @param {String} ids
     * @param {Integer} page
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL shops form your own mall
     * 
     *  os.mall.shop.get({page:1}) 
     * 
     *  // Get shops with filters from your own mall
     * 
     *  os.mall.shop.get({ids:'5243,2233,211',domain:'oneshop.cloud',page:1})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/shops`, query || {}, this.credentials);
    }

}

module.exports = Shop;