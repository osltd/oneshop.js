const Role = require('../fundamental');

class Credential extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Add credential to your account
     * @param {Object} credential
     * @param {String} credential[token]
     * @param {String} credential[type]
     * 
     * Examples:
     *  os.consumer.credential.create({token:'ab23424eced2ra349754ecc',type:'consumer'})
     * 
     */
    create(credential){
        return this.request.post(`${this.baseURL}/credentials`, {token:credential.token || '', type:credential.type || ''}, this.credentials);
    }

    /**
     * Retrieve credentials that have permission to access your account
     * @param {Object} query
     * @param {String} query[page]
     * @param {String} query[ids]
     * @param {String} query[types]
     * @param {String} query[tokens]
     * 
     * Example:
     * 
     *  // get ALL credential with page
     * 
     *  os.consumer.credential.get({page:'1'})
     * 
     *  // get specified credential with filtering value and page 
     * 
     *  os.consumer.credential.get({ids:'2123',tokens:'ab23424eced2ra349754ecc',types:'consumer',page:'1'})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/credentials`, query || {}, this.credentials);
    }

    /**
     * Delete credential by id
     * @param {Integer} credentialId 
     * 
     * Example:
     * 
     *  os.consumer.credential.delete(2123)
     * 
     */
    delete(credentialId){
        return this.request.delete(`${this.baseURL}/credentials/${credentialId}`, this.credentials);
    }

}

module.exports = Credential;