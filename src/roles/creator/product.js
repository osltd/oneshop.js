const Role = require('../fundamental');

class Product extends Role {

    constructor(baseURL, credentials, role){
        super(baseURL, credentials, role);
        this.baseURL = baseURL;
        this.credentials = credentials[role] || {
            user : credentials.user || '',
            pass : credentials.pass || '',
        };
    }


    /**
     * Retrieve your products
     * @param {Object} query
     * @param {String} query[locale] // locale : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {String} query[ids]   // product id(s)
     * @param {String} query[tags]
     * @param {String} query[status] // 'VIRTUAL' | 'PHYSICAL'
     * @param {String} query[keywords]
     * @param {String} query[ordering] // 'asc' (acending) | 'desc' (descending)
     * 
    * Examples:
     * 
     *  // ALL filter values are optional
     * 
     *  // Get ALL products list.
     * 
     *  os.creator.product.get()
     * 
     *  // get specified products list with filters
     * 
     *  os.creator.product.get({locate:'en_US',ids:'4342,552,3433',tags:'tag1,tag2',
     *  status:'PUBLIC',keyword:'love',ordering:'desc'}) 
     * 
     * 
     */
    get(query){
        return this.request.get(`${this.baseURL}/products`, query || {}, this.credentials);
    }

    /**
     * Create product
     * @param {Object} context 
     * @param {Object} context[locales] (Optional) // locale : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {Float} context[price] (Required)
     * @param {String} context[tags] (Optional)
     * @param {String} context[shops] (Optional)
     * @param {String} context[media] (Optional)
     * @param {String} context[type] (Required) // 'VIRTUAL' | 'PHYSICAL'
     * @param {Float} context[weight] (Required)
     * @param {Float} context[width] (Required)
     * @param {Float} context[height] (Required)
     * @param {Float} context[length] (Required)
     * @param {Array} context[details] (Required)
     * @param {Array} context[options] (Required)
     * @param {Array} context[variants] (Required)
     * 
     * 
     * Examples:
     * 
     *  os.creator.product.create(
     *  {
     *      tags:'speaker,bluetooth',
     *      options:{
     *          en_US:{
     *              color:color:'black:black,white:white',
     *              'size:size":"small:small,large:large'
     *          }
     *      },
     *      media:'https://assets.oneshop.cloud/682ABC5B-E5DE-42DB-8BAC-73CDC5A453CD.jpeg',
     *      type:'VIRTUAL',
     *      variants:[
     *          {
     *              description:'color:black,size:small',
     *              price:12,
     *              sku:'bs_1'
     *          },
     *          {
     *              description:'color:white,size:small',
     *              price:456.55,
     *              sku:'ws_1'
     *          }
     *      ],
     *      locales:'en_US',
     *      price:234.27,
     *      weight:0.60,
     *      width:12.3,
     *      height:12.3,
     *      length:12.3,
     *      details:{
     *          en_US:{
     *              name:'Bluetooth Speaker',
     *              description:'Perfect sound and perfect appearance speaker, has two colors and two sizes.'
     *          }
     *      },
     *      // shop_id:time
     *      shop:{4233:2019-10-10T10:22:33.000Z}
     *  })
     * 
     * 
     */
    create(context){
        return this.request.post(`${this.baseURL}/products`, context || {}, this.credentials);
    }


    /**
     * Update product by id
     * @param {Integer} productId
     * @param {Object} context 
     * @param {Object} context[locales] (Optional) // locale : 'en_US' | 'zh_HK' | 'zh_CN' | etc.
     * @param {Float} context[price] (Optional)
     * @param {String} context[tags] (Optional)
     * @param {String} context[shops] (Optional)
     * @param {String} context[media] (Optional)
     * @param {String} context[type] (Optional) // 'VIRTUAL' | 'PHYSICAL'
     * @param {Float} context[weight] (Optional)
     * @param {Float} context[width] (Optional)
     * @param {Float} context[height] (Optional)
     * @param {Float} context[length] (Optional)
     * @param {Array} context[details] (Optional)
     * @param {Array} context[options] (Optional)
     * @param {Array} context[variants] (Optional)
     * 
     * Examples:
     * 
     *  os.creator.product.update(2654,
     *  {
     *      tags:'speaker,bluetooth',
     *      options:{
     *          en_US:{
     *              color:color:'black:black,white:white',
     *              'size:size":"small:small,large:large'
     *          }
     *      },
     *      media:'https://assets.oneshop.cloud/682ABC5B-E5DE-42DB-8BAC-73CDC5A453CD.jpeg',
     *      type:'VIRTUAL',
     *      variants:[
     *          {
     *              description:'color:black,size:small',
     *              price:12,
     *              sku:'bs_1'
     *          },
     *          {
     *              description:'color:white,size:small',
     *              price:456.55,
     *              sku:'ws_1'
     *          }
     *      ],
     *      locales:'en_US',
     *      price:234.27,
     *      weight:0.60,
     *      width:12.3,
     *      height:12.3,
     *      length:12.3,
     *      details:{
     *          en_US:{
     *              name:'Bluetooth Speaker',
     *              description:'Perfect sound and perfect appearance speaker, has two colors and two sizes.'
     *          }
     *      },
     *      // shop_id:time
     *      shop:{4233:2019-10-10T10:22:33.000Z}
     *  })
     * 
     * 
     */
    update(productId, context){
        return this.request.put(`${this.baseURL}/products/${productId}`, context || {}, this.credentials);
    }


    /**
     * Delete product
     * @param {Integer} productId 
     * 
     * Examples:
     * 
     *  os.creator.product.delete(2654)
     * 
     */
    delete(productId){
        return this.request.delete(`${this.baseURL}/products/${productId}`, this.credentials);
    }

}

module.exports = Product;