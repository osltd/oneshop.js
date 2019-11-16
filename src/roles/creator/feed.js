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
     * Retrieve your feeds
     * @param {Object} query 
     * @param {String} query[ids]
     * @param {String} query[locale] 
     * @param {String} query[tags]
     * @param {String} query[status
     * @param {String} query[keywords]
     * @param {Object} query[section]
     * @param {String} query[ordering] 
     */
    get(query){
        return this.request.get(`${this.baseURL}/feeds`, query || {}, this.credentials);
    }


    /**
     * Create feed
     * @param {Object} context 
     * @param {Object} context[sections]
     * @param {Array} context[sections][LANGAUGE_CODE]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][title]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][description]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][tags]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][media]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][type]
     * @param {Object} shops
     */
    create(context){
        return this.request.post(`${this.baseURL}/feeds`, context || {}, this.credentials);
    }


    /**
     * Update specific feed by id
     * @param {Integer} feedId 
     * @param {Object} context 
     * @param {Object} context[sections]
     * @param {Array} context[sections][LANGAUGE_CODE]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][title]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][description]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][tags]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][media]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][type]
     * @param {Object} shops
     */
    update(feedId, context){
        return this.request.put(`${this.baseURL}/feeds/${feedId}`, context || {}, this.credentials);
    }

    /**
     * Delete feed from your acocunt
     * @param {Integer} feedId 
     */
    delete(feedId){
        return this.request.delete(`${this.baseURL}/feeds/${feedId}`, {}, this.credentials);
    }

}

module.exports = Feed;