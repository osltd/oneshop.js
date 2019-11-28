const Role = require('../fundamental');

class Domain extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve domains of your shop
     * 
     * @param {Object} query
     * @param {String} query[stages] // custom define - e.g. production,development
     * @param {String} query[statuses] // 'ACTIVE' | 'MAIN'
     * @param {String} query[scopes] // 'MAIN' | 'ALIAS'
     * @param {Integer} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL domains form your shop
     * 
     *  os.merchant.domain.get({page:1}) 
     * 
     *  // Get domains form your shop using filters
     * 
     *  os.merchant.domain.get({stages:'PRODUCTION',statuses:'ACTIVE',scopes:'MAIN',page:1}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/domains`, query || {}, this.credentials);
    }


    /**
     * 
     * Add domain to your shop
     * 
     * @param {Object} context 
     * @param {String} context[name]
     * @param {String} context[stage] // custom define - e.g. production,development
     * 
     * Examples:
     * 
     *  os.merchant.domain.add({name:'oneshop.cloud',stage:'production'})
     * 
     */
    add(context){
        return this.request.post(`${this.baseURL}/domains`, context || {}, this.credentials);
    }

    
    /**
     * 
     * Detach domain from your shop
     * 
     * @param {Integer} domainId 
     * 
     * Examples:
     * 
     *  os.merchant.domain.delete(453)
     * 
     */
    delete(domainId){
        return this.request.delete(`${this.baseURL}/domains/${domainId}`, this.credentials);
    }

}

module.exports = Domain;