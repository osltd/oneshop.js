const Role = require('../fundamental');

class Notification extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    
    /**
     * Fetch unhandled notifications
     */
    get(){
        return this.request.get(`${this.baseURL}/notifications`, {}, this.credentials);
    }


    /**
     * Update notification
     * @param {String} status[active][deleted]
     */
    update(notificationId, status){
        return this.request.put(`${this.baseURL}/notifications/${notificationId}`, {status:status}, this.credentials);
    }

}

module.exports = Notification;