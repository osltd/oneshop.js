const Role = require('../fundamental');

class Teammate extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * 
     * Retrieve teammates of your shop
     * 
     * @param {Object} query
     * @param {String} query[ids]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL teammates form your shop
     * 
     *  os.merchant.teammate.get() 
     * 
     *  // Get teammates form your shop using filters
     * 
     *  os.merchant.teammate.get({ids:'211,332'}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/teammates`, query || {}, this.credentials)
    }


    /**
     * 
     * Add teammate to your shop
     * 
     * @param {Object} context 
     * @param {String} context[username]
     * @param {String} context[scope] (admin|editor|developer)
     * 
     * Examples:
     * 
     *  os.merchant.teammate.add({username:'OneShopUser',scope:'ADMIN'})
     * 
     */
    add(context){
        return this.request.post(`${this.baseURL}/teammates`, context || {}, this.credentials)
    }


    /**
     * 
     * Update teammate by id
     * 
     * @param {Integer} teammateId 
     * @param {Object} context 
     * @param {String} context[username]
     * @param {String} context[scope] (admin|editor|developer)
     * 
     * Examples:
     * 
     *  os.merchant.teammate.update(211,{username:'OneShopUser',scope:'ADMIN'})
     * 
     * 
     */
    update(teammateId, context){
        return this.request.put(`${this.baseURL}/teammates/${teammateId}`, context || {}, this.credentials)
    }


    /**
     * 
     * Delete teammate by id
     * 
     * @param {Integer} teammateId 
     * 
     * Examples:
     * 
     *  os.merchant.teammate.remove(332)
     * 
     */
    remove(teammateId){
        return this.request.delete(`${this.baseURL}/teammates/${teammateId}`, context || {}, this.credentials)
    }

}

module.exports = Teammate;