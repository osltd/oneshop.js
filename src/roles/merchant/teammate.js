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
     */
    remove(teammateId){
        return this.request.delete(`${this.baseURL}/teammates/${teammateId}`, context || {}, this.credentials)
    }

}

module.exports = Teammate;