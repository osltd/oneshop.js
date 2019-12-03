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
     * @param {Object} query
     * @param {Integer} query[page]
     * 
     * Examples:
     * 
     *  os.consumer.notification.get({page:1})
     * 
     */
    get(){
        return this.request.get(`${this.baseURL}/notifications`, {}, this.credentials);
    }


    /**
     * Update notification
     * @param {String} status // value only be 'active' or 'deleted'
     * 
     * Examples:
     * 
     *  // active the notification
     * 
     *  os.consumer.notification.update(5321,'active') 
     * 
     *  // cancel the notification
     * 
     *  os.consumer.notification.update(5321,'deleted')
     * 
     */
    update(notificationId, status){
        return this.request.put(`${this.baseURL}/notifications/${notificationId}`, {status:status}, this.credentials);
    }

}

module.exports = Notification;