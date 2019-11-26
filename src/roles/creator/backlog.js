const Role = require('../fundamental');

class Backlog extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve backlog's of user
     * 
     * Examples:
     * 
     *  os.creator.backlog.get()
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/backlogs`, query || {}, this.credentials);
    }

}

module.exports = Backlog;