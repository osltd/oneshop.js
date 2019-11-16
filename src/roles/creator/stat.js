const Role = require('../fundamental');

class Stat extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
        /**
         * Retrieve most engaged hours of your articles
         */
        this.peak = {
            get : (query) => this.request.get(`${this.baseURL}/peaks`, query || {}, this.credentials)
        };
        /**
         * Retrieve best sellers stats
         */
        this.sale = {
            get : (query) => this.request.get(`${this.baseURL}/sales`, query || {}, this.credentials)
        };
        /**
         * Retrieve the classification details of your articles
         */
        this.strength = {
            get : (query) => this.request.get(`${this.baseURL}/strengths`, query || {}, this.credentials)
        };
        /**
         * Retrieve the view info of your articles
         */
        this.view = {
            get : (query) => this.request.get(`${this.baseURL}/views`, query || {}, this.credentials)
        };
    }

}

module.exports = Stat;