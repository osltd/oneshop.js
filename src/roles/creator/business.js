const Role = require('../fundamental');

class Business extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve shops you own
     * @param {Object} query 
     * @param {String} query[page]
     * @param {String} query[ids]  // shop id(s)
     * @param {String} query[tags]
     * 
     * Examples:
     * 
     *  // get ALL shops you own
     * 
     *  os.creator.business.get({page:'1'})
     * 
     *  // get shops with specified shop ids
     * 
     *  os.creator.business.get({ids:'123,423,6653',page:'1'})
     * 
     *  // get shops with specified tags
     * 
     *  os.creator.business.get({tags:'love,only',page:'1'})
     * 
     *  // get specified shop ids and tags you own
     * 
     *  os.creator.business.get({ids:'123,423,6653',tags:'love,only',page:'1'})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/businesses`, query || {}, this.credentials);
    }

    /**
     * 
     * @param {Object} info
     * @param {Integer} info[channel] (required)
     * @param {String} info[name] (required)
     * @param {String} info[description] (required)
     * @param {String} info[voucher]
     * @param {String} info[tags]
     * @param {String} info[icon]
     * 
     * Examples:
     * 
     *  os.creator.business.create({
     *  channel:1233,
     *  name:'Shop Test Channel',
     *  description:'Test channel descriptions.',
     *  voucher:'Gogogo',
     *  tags:'tag1,tag2,tag3',
     *  icon:'https://assets.oneshop.cloud/..png'})
     * 
     */
    create(info){
        return this.request.create(`${this.baseURL}/businesses`, info || {}, this.credentials);
    }

}

module.exports = Business;