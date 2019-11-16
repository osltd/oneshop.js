const Role = require('../fundamental');

class Article extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve mall articles
     * @param {String} ids
     * @param {String} keywords
     * @param {String} tags
     * @param {String} shops
     * @param {String} statuses
     * @param {Integer} page
     */
    get(query){
        return this.request.get(`${this.baseURL}/articles`, query || {}, this.credentials);
    }

    /**
     * Update article by id (Deprecated)
     * @param {Integer} id 
     * @param {Object} body 
     */
    /*
    update(id, body){
        return this.request.put(`${this.baseURL}/articles/${id}`, body, this.credentials);
    }
    */

}

module.exports = Article;