const Role = require('../fundamental');

class Product extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve your products
     * @param {Object} query
     * @param {String} query[locale]
     * @param {String} query[ids]
     * @param {String} query[tags]
     * @param {String} query[status]
     * @param {String} query[keywords]
     * @param {String} query[ordering]
     */
    get(query){
        return this.request.get(`${this.baseURL}/products`, query || {}, this.credentials);
    }

    /**
     * Create product
     * @param {Object} context 
     * @param {Object} context[locales] (Optional)
     * @param {Float} context[price] (Required)
     * @param {String} context[tags] (Optional)
     * @param {String} context[shops] (Optional)
     * @param {String} context[media] (Optional)
     * @param {String} context[type] (Required)
     * @param {Float} context[weight] (Required)
     * @param {Float} context[width] (Required)
     * @param {Float} context[height] (Required)
     * @param {Float} context[length] (Required)
     * @param {Array} context[details] (Required)
     * @param {Array} context[options] (Required)
     * @param {Array} context[variants] (Required)
     */
    create(context){
        return this.request.post(`${this.baseURL}/products`, context || {}, this.credentials);
    }


    /**
     * Update product by id
     * @param {Integer} productId
     * @param {Object} context 
     * @param {Object} context[locales] (Optional)
     * @param {Float} context[price] (Optional)
     * @param {String} context[tags] (Optional)
     * @param {String} context[shops] (Optional)
     * @param {String} context[media] (Optional)
     * @param {String} context[type] (Optional)
     * @param {Float} context[weight] (Optional)
     * @param {Float} context[width] (Optional)
     * @param {Float} context[height] (Optional)
     * @param {Float} context[length] (Optional)
     * @param {Array} context[details] (Optional)
     * @param {Array} context[options] (Optional)
     * @param {Array} context[variants] (Optional)
     */
    update(productId, context){
        return this.request.put(`${this.baseURL}/products/${productId}`, context || {}, this.credentials);
    }


    /**
     * Delete product
     * @param {Integer} productId 
     */
    delete(productId){
        return this.request.delete(`${this.baseURL}/products/${productId}`, this.credentials);
    }

}

module.exports = Product;