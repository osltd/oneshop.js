const Role = require('../fundamental');

class Profile extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Fetch user profile
     * 
     * Examples:
     * 
     *  os.consumer.profile.get()
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/consumers/session`, query || {}, this.credentials);
    }

    /**
     * Update user profile
     * @param {Object} profile 
     * @param {String} profile[any_field] // custom values you want e.g profile[gender], profile[phone]
     * @param {String} profile[tags]
     * @param {String} profile[passwd]
     * @param {String} profile[confpasswd]
     * 
     * Examples:
     * 
     *  os.consumer.profile.update(
     *  passwd:'IGoToSchoolByBus',
     *  confpasswd:'IGoToSchoolByBus',
     *  tags:'I,AM,SUPERMAN,orz',
     *  field_1:'value_1')
     * 
     */
    update(profile){
        return this.request.put(`${this.baseURL}/consumers/session`, profile, this.credentials);
    }

}

module.exports = Profile;