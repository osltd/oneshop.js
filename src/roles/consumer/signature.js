const Role = require('../fundamental');

class Signature extends Role {

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
     * @param {String} ids
     * @param {String} extension // (mime type: image/png, video/mp4, ...)
     * 
     * Examples:
     * 
     *  os.consumer.signature.create('video/mp4')
     * 
     */
    create(extension){
        return this.request.post(`${this.baseURL}/signatures`, {extension : extension}, this.credentials);
    }

}

module.exports = Signature;