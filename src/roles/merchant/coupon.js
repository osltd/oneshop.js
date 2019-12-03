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
     * @param {String} query[ids] // coupon id
     * @param {String} query[page]
     * 
     * Examples:
     * 
     *  // ALL filtering value are optional
     * 
     *  // Get ALL coupons form your own shop
     * 
     *  os.merchant.coupon.get({page:'1'}) 
     * 
     *  // Get coupons with filters from your own shop
     *  os.merchant.coupon.get({ids:'232,543',page:'1'}) 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/coupons`, query || {}, this.credentials);
    }


    /**
     * Create coupon of your shop
     * 
     * @param {Object} context
     * @param {String} context[title]
     * @param {String} context[code] // only applicable to coupons with the 'usage' value 'pre' 
     * @param {String} context[usage] // 'pre' | 'post' | 'instant' | 'shipment'
     * @param {Integer} context[quota]
     * @param {String} context[tags] (e.g. tag1,tag2)
     * @param {String} context[start_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[end_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[type] // 'fixed' | 'percent'
     * @param {Float} context[rate]
     * @param {Float} context[min_charge]
     * @param {Integer} context[min_items]
     * 
     * Examples:
     * 
     *  os.merchant.coupon.create({
     *      title:'10% off discount coupon',
     *      code:'ONEshop10',
     *      quota:100,
     *      rate:10,
     *      type:'PERCENT',
     *      usage:'PRE',
     *      tags:'tag1,tag2,tag3',
     *      min_charge:100.00,
     *      min_items:5,
     *      start_time:'2019-10-23T12:00:00.000Z',
     *      end_time:'2019-12-31T12:00:00.000Z'
     *  })
     * 
     * 
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
     * @param {String} context[code] // only applicable to coupons with the 'usage' value 'pre'
     * @param {String} context[usage] // 'pre' | 'post' | 'instant' | 'shipment'
     * @param {Integer} context[quota]
     * @param {String} context[tags] (e.g. tag1,tag2)
     * @param {String} context[start_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[end_time] (e.g. 2019-01-01T00:00:00Z)
     * @param {String} context[type] // 'fixed' | 'percent'
     * @param {Float} context[rate]
     * @param {Float} context[min_charge]
     * @param {Integer} context[min_items]
     * 
     * Examples:
     * 
     *  os.merchant.coupon.update(243,{
     *      title:'10% off discount coupon',
     *      code:'ONEshop10',
     *      quota:100,
     *      rate:10,
     *      type:'PERCENT',
     *      usage:'PRE',
     *      tags:'tag1,tag2,tag3',
     *      min_charge:100.00,
     *      min_items:5,
     *      start_time:'2019-10-23T12:00:00.000Z',
     *      end_time:'2019-12-31T12:00:00.000Z'
     *  })
     * 
     */
    update(couponId, context){
        return this.request.put(`${this.baseURL}/coupons/${couponId}`, context || {}, this.credentials);
    }

    /**
     * Delete coupon by id
     * 
     * @param {Integer} couponId 
     * 
     * Examples:
     * 
     *  os.merchant.coupon.delete(243)
     * 
     */
    delete(couponId){
        return this.request.delete(`${this.baseURL}/coupons/${couponId}`, context || {}, this.credentials);
    }

    /**
     * 
     * Retrieve usage of specific coupon
     * @param {Integer} couponId 
     * 
     * Examples:
     * 
     *  os.merchant.coupon.usage(243)
     * 
     */
    usage(couponId){
        return this.request.get(`${this.baseURL}/coupons/${couponId}/usages`, {}, this.credentials);
    }
}

module.exports = Coupon;