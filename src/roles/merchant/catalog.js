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
     * @param {String} query[ids]
     * @param {String} query[page]
     * @param {String} query[ownership] (self, others)
     * @param {String} query[type] (physical, virtual)
     * @param {String} query[tags] (shoes,clothes)
     * @param {String} query[skus] (sneaker_blue_43, sneaker_blue_41)
     * @param {String} query[keywords] (sneaker)
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/displays`, query || {}, this.credentials);
    }

}

module.exports = Catalog;