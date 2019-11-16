const request = require('../helpers/request');

class Fundamental {
    constructor(baseURL, credentials, role){
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || ''
        };
        this.baseURL = baseURL;
        this.role = role;
        this.request = request;
    }

    /**
     * Set Mall Credential
     * @param {user, pass}
     */
    setCredentials(credentials){
        this.credentials = credentials[this.role] || {
            user : credentials.user || '',
            pass : credentials.pass || ((this.credentials || {}).mall || {}).pass || ''
        };
    }

    /**
     * Returns credential of that role
     */
    getCredentials(){
        return this.credentials || {
            user : '',
            pass : ''
        };
    }

}

module.exports = Fundamental;