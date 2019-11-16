const Role = require('../fundamental');

class Post extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retreieve shop's posts
     * 
     * @param {Object} query 
     * @param {String} query[start_time]
     * @param {String} query[end_time]
     * @param {String} query[ids]
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/posts`, query || {}, this.credentials)
    }

}

module.exports = Post;