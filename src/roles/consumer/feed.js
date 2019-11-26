const Role = require('../fundamental');

class Feed extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Set reaction for feed by id
     * @param {Integer} feedId 
     * @param {String} reaction love,hate,sad
     * 
     * Examples:
     * 
     *  os.consumer.feed.react(2123,'love')
     * 
     */
    react(feedId, reaction){
        return this.request.put(`${this.baseURL}/articles/${feedId}`, {type:reaction}, this.credentials);
    }

}

module.exports = Feed;