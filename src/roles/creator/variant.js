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
     */
    get(productId, query){
        return this.request.get(`${this.baseURL}/products/${productId}/variants`, query || {}, this.credentials);
    }

}

module.exports = Variant;