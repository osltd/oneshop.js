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
     * @param {Object} query
     * @param {String} query[codes] (Required)
     * @param {String} query[malls] // mall id(s)
     * @param {String} query[shops] // shop id(s)
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional (except'codes' value)
     * 
     *  // Get ALL vouchers (coupons) form all mall
     * 
     *  os.mall.voucher.get({codes:'ONESHOP10OFF',page:'1'}) 
     * 
     *  // Get vouchers (coupons) with filters from all mall
     * 
     *  os.mall.voucher.get({malls:'321',shops:'533',codes:'ONESHOP10OFF',page:'1'})
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/malls/${this.credentials.user}/vouchers`, query || {}, this.credentials);
    }

}

module.exports = Voucher;