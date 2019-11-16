const Role = require('../fundamental');

class Coupon extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }

    /**
     * Retrieve your shops coupons
     * 
     * @param {Object} query
     * @param {String} query[ids]
     * @param {Integer} query[page]
     */
    get(query){
        return this.request.get(`${this.baseURL}/coupons`, query || {}, this.credentials);
    }


    /**
     * Create coupon of your shop
     * 
     * @param {Object} context
     * @param {String} context[title]
     * @param {String} context[code]
     * @param {String} context[usage] (pre, post, instant, shipment)
     * @param {Integer} context[quota]
     * @param {String} context[tags] (tag1,tag2)
     * @param {String} context[start_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[end_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[type] (fixed, percent)
     * @param {Float} context[rate]
     * @param {Float} context[min_charge]
     * @param {Integer} context[min_items]
     */
    create(context){
        return this.request.post(`${this.baseURL}/coupons`, context || {}, this.credentials);
    }


    /**
     * update coupon of your shop
     * 
     * @param {Integer} couponId
     * @param {Object} context
     * @param {String} context[title]
     * @param {String} context[code]
     * @param {String} context[usage] (pre, post, instant, shipment)
     * @param {Integer} context[quota]
     * @param {String} context[tags] (tag1,tag2)
     * @param {String} context[start_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[end_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[type] (fixed, percent)
     * @param {Float} context[rate]
     * @param {Float} context[min_charge]
     * @param {Integer} context[min_items]
     */
    update(couponId, context){
        return this.request.put(`${this.baseURL}/coupons/${couponId}`, context || {}, this.credentials);
    }

    /**
     * Delete coupon by id
     * 
     * @param {Integer} couponId 
     */
    delete(couponId){
        return this.request.delete(`${this.baseURL}/coupons/${couponId}`, context || {}, this.credentials);
    }

    /**
     * 
     * Retrieve usage of specific coupon
     * 
     * @param {Integer} couponId 
     */
    usage(couponId){
        return this.request.get(`${this.baseURL}/coupons/${couponId}/usages`, {}, this.credentials);
    }
}

module.exports = Coupon;