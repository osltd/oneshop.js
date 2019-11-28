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
     * @param {String} query[ids] // post id(s)
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL posts form your shop
     * 
     *  os.merchant.post.get({page:1}) 
     * 
     *  // Get posts form your shop using filters
     * 
     *  os.merchant.post.get({start_time:'2019-10-10T12:30:00.000Z',
     *  end_time:'2019-10-10T12:30:00.000Z',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/posts`, query || {}, this.credentials)
    }

}

module.exports = Post;