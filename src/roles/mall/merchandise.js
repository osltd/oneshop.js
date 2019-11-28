const Role = require('../fundamental');

class Merchandise extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve merchandises
     * @param {Object} query
     * @param {String} query[ids] // merchant id(s)
     * @param {String} query[shops]
     * @param {String} query[skus]
     * @param {String} query[tags]
     * @param {String} query[locale] // locale : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {String} query[keywords]
     * @param {Integer} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL merchandises form your own mall
     * 
     *  os.mall.merchandise.get({page:1}) 
     * 
     *  // Get specified merchandises with filters form your own mall
     * 
     *  os.mall.merchandise.get({ids:'43,54,123',shops:'443,121,93',skus:'tk_1',tags:'tag1,tag2'
     *  locale:'en_US',keyword:'love',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/merchandises`, query || {}, this.credentials);
    }

}

module.exports = Merchandise;