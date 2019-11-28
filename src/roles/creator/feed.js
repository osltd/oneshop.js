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
     * @param {String} query[ids] // feed (post) id(s)
     * @param {String} query[locale]  // 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {String} query[tags]
     * @param {String} query[statuses] // "published" | 'draft' | 'scheduled' 
     * @param {String} query[keywords]
     * @param {Object} query[section]
     * @param {String} query[ordering] // 'asc' (acending) | 'desc' (descending)
     * 
     * Examples:
     *  
     *  // ALL filtering value are optional
     * 
     *  // Retrieve ALL feeds
     * 
     *  os.creator.feed.get() 
     * 
     *  // Retrieve some feeds with filtering
     * 
     *  os.creator.feed.get({ids:'2763,1845,641',locate:'zh_HK',tags:'tag1,tag2',statuses:'published,scheduled,',keywords:'love',ordering:'desc',
     *  section:{title*:'AppleInc'}}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/feeds`, query || {}, this.credentials);
    }


    /**
     * Create feed
     * @param {Object} context 
     * @param {Object} context[sections]
     * @param {Array} context[sections][LANGAUGE_CODE] // LANGAUGE_CODE : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][title]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][description]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][tags]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][media]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][type] // 'text/html' | 'text/plain' | 'product'
     * @param {Object} shops
     * 
     * Examples:
     * 
     *  os.creator.feed.create({
     *      section:{
     *          en_US : [{title:'First Section Title',description:'1st Description.',
     *                    tags:'tag1,tag2,tag3',type:'text/plain',media:'https://assets.oneshop.cloud/..png'}]
     *      },
     * 
     *      // shop_id:time, shop_id:time, ......
     *      shops:{327:'2019-10-01T00:10:10Z'}
     *  })
     * 
     * 
     */
    create(context){
        return this.request.post(`${this.baseURL}/feeds`, context || {}, this.credentials);
    }


    /**
     * Update specific feed by id
     * @param {Integer} feedId 
     * @param {Object} context 
     * @param {Object} context[sections]
     * @param {Array} context[sections][LANGAUGE_CODE] // LANGAUGE_CODE : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][title]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][description]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][tags]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][media]
     * @param {String} context[sections][LANGAUGE_CODE][INDEX][type] // 'text/html' | 'text/plain' | 'product'
     * @param {Object} shops
     * 
     * Examples:
     * 
     *  os.creator.feed.update(4333,{
     *      section:{
     *          en_US : [{title:'First Section Title',description:'1st Description.',
     *                    tags:'tag1,tag2,tag3',type:'text/plain',media:'https://assets.oneshop.cloud/..png'}]
     *      },
     * 
     *      // shop_id:time, shop_id:time, ......
     *      shops:{327:'2019-10-01T00:10:10.000Z'}
     *  })
     * 
     * 
     */
    update(feedId, context){
        return this.request.put(`${this.baseURL}/feeds/${feedId}`, context || {}, this.credentials);
    }

    /**
     * Delete feed from your acocunt
     * @param {Integer} feedId 
     * 
     * Examples:
     * 
     *  os.creator.feed.delete(4333)
     * 
     */
    delete(feedId){
        return this.request.delete(`${this.baseURL}/feeds/${feedId}`, {}, this.credentials);
    }

}

module.exports = Feed;