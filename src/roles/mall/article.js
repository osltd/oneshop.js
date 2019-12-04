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
     * @param {Object} query 
     * @param {String} query[ids] // article (post) id(s)
     * @param {String} query[keywords]
     * @param {String} query[tags]
     * @param {String} query[shops]
     * @param {String} query[statuses] // 'PUBLISHED' | 'SCHEDULE'
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL articles form your own mall
     * 
     *  os.mall.article.get({page:'1'}) 
     * 
     *  // Get articles with filters from your own mall
     * 
     *  os.mall.article.get({ids:'1743,293,6652',keywords:'love',tags:'tag1,tag2',
     *  shops:'522',statuses:'PUBLISHED',page:'1'})
     * 
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