const Role = require('../fundamental');

class Variant extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve variants of a product
     * @param {Integer} productId
     * @param {Object} query 
     * 
     * Examples:
     *  
     *  // Filter values are optional
     * 
     *  // Get ALL variants within the related product
     * 
     *  os.creator.variant.get(2354,null)
     * 
     *  // Get specified variants within the related product using filters
     * 
     *  os.creator.variant.get(2354,{description:'love'})
     * 
     */
    get(productId, query){
        return this.request.get(`${this.baseURL}/products/${productId}/variants`, query || {}, this.credentials);
    }

}

module.exports = Variant;