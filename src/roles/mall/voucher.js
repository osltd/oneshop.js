const Role = require('../fundamental');

class Voucher extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve mall vouchers
     * @param {String} codes (Required)
     * @param {String} malls
     * @param {String} shops
     * @param {Integer} page
     */
    get(query){
        return this.request.get(`${this.baseURL}/malls/${this.credentials.user}/vouchers`, query || {}, this.credentials);
    }

}

module.exports = Voucher;