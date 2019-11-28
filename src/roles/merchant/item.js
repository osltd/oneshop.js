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
                 * 
                 * Examples:
                 *  
                 *  os.merchant.item.stock(532,'3c458765abed54564cdea').get()
                 * 
                 */
                get : () => this.request.get(`${this.baseURL}/items/${itemId}/variants/${variantId}/stock`, {}, this.credentials),
    
                /**
                 * Add stock of a variant of an item
                 * 
                 * @param {Integer} itemId 
                 * @param {Integer} variantId 
                 * 
                 * Examples:
                 *  
                 *  os.merchant.item.stock(532,'3c458765abed54564cdea').set(125)
                 * 
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
                 * 
                 * Examples:
                 * 
                 *  os.merchant.item.variant(532,'3c458765abed54564cdea').update({stock:125})
                 * 
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
     * @param {String} query[ids] // items id(s)
     * @param {Integer} query[page]
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL items form your shop
     * 
     *  os.merchant.item.get({page:1}) 
     * 
     *  // Get items form your shop using filters
     * 
     *  os.merchant.item.get({ids:'755,232',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/items`, query || {}, this.credentials);
    }

}

module.exports = Item;