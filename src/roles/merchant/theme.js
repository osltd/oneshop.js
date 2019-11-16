const Role = require('../fundamental');

class Theme extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };

        /**
         * Retrieve commit history of a theme by id
         * @param {Integer} themeId
         * @param {Object} query
         * @param {Integer} query[page]
         * @param {String} query[branches]
         */
        this.commit = {
            get : (themeId, query) => this.request.get(`${this.baseURL}/themes/${themeId}/commits`, query || {}, this.credentials)
        }
    }

    /**
     * 
     * Retrieve your shop's themes
     * 
     */
    get(){
        return this.request.get(`${this.baseURL}/themes`, {}, this.credentials);
    }


    /**
     * Create theme
     * 
     * @param {Integer} themeId
     * 
     */
    create(themeId){
        return this.request.get(`${this.baseURL}/themes`,  themeId ? { sample:themeId } : {}, this.credentials);
    }


}

module.exports = Theme;