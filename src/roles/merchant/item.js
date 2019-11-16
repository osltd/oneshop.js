const Role = require('../fundamental');

class Item extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };

        this.stock = function(itemId, variantId){
            return {
                /**
                 * 
                 * Get stocks of a variant of an item
                 * 
                 * @param {Integer} itemId 
                 * @param {Integer} variantId
                 */
                get : () => this.request.get(`${this.baseURL}/items/${itemId}/variants/${variantId}/stock`, {}, this.credentials),
    
                /**
                 * Add stock of a variant of an item
                 * 
                 * @param {Integer} itemId 
                 * @param {Integer} variantId 
                 */
                set: (amount) => this.request.post(`${this.baseURL}/products/${itemId}/variants/${variantId}/stock`, {amount : amount}, this.credentials)
            };
        }

        this.variant = function (itemId, variantId){
            return {
                /**
                 * 
                 * Update variant
                 * 
                 * @param {Object} context
                 * @param {Integer} context[stock]
                 */
                update : (context) => this.request.put(`${this.baseURL}/items/${itemId}/variants/${variantId}`, context, this.credentials)
            }
        }

    }


    /**
     * 
     * Retrieve items of your shop
     * 
     * @param {Object} query
     * @param {String} query[ids]
     * @param {Integer} query[page]
     */
    get(query){
        return this.request.get(`${this.baseURL}/items`, query || {}, this.credentials);
    }

}

module.exports = Item;