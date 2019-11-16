require('dotenv').config()
const oneshop = require('../index');

// init oneshop
let os = new oneshop();
// set credentials
os.setCredentials({
    mall:{ 
        id : process.env.MALL_USER, 
        token : process.env.MALL_SECRET
    },
    consumer : {
        id : process.env.CONSUMER_USER, 
        token : process.env.CONSUMER_SECRET
    }
})

let tests = {
    // creates a signature for upload image to S3
    0: () => os.creator.backlog.get(),
    // get business you own
    1: () => os.creator.business.get(),
    // create business
    2: () => os.creator.business.create({channel:2, name:"MyWebShop", description:"foo", voucher:"codeForFree", tags:"web,shop",icon:"https://foo.com/foo.jpg"}),
    // get commodities
    3: () => os.creator.commodity.get(),
    // retrieve your feeds
    4: () => os.creator.feed.get({page:3}),
    // create feed
    6: () => os.creator.feed.create({sections:{en_US:[{title:'foo', description: 'foo foo', tags:'footag1,footag2', media:'https://foo.com/foo.jpg'}]}}),
    // update feed
    5: () => os.creator.feed.update(1234, {sections:{en_US:[{title:'foo', description: 'foo foo', tags:'footag1,footag2', media:'https://foo.com/foo.jpg'}]}}),
    // delete feed
    6: () => os.creator.feed.delete(1234),
    // get malls
    7: () => os.creator.mall.get(),
    // get products
    8: () => os.creator.product.get(),
    // create product
    9: () => os.creator.product.create({
        "options": {
            "en_US": {
                "color:color": "black:black,white:white,red:red,blue:blue",
                "size:size": "small:small,large:large"
            }
        },
        "media": "https://assets.oneshop.cloud/682ABC5B-E5DE-42DB-8BAC-73CDC5A453CD.jpeg",
        "type": "VIRTUAL",
        "variants": [
            {
                "description": "color:black,size:small",
                "price": 123,
                "sku": "bs_1"
            },
            {
                "description": "color:white,size:small",
                "price": 456.55,
                "sku": "ws_1"
            },
            {
                "description": "color:red,size:small",
                "price": 123,
                "sku": null
            },
            {
                "description": "color:blue,size:small",
                "price": 123,
                "sku": null
            },
            {
                "description": "size:large,color:black",
                "price": 789.99,
                "sku": "sku_lb_88"
            },
            {
                "description": "size:large,color:white",
                "price": 512.8,
                "sku": "sku_lc_34"
            },
            {
                "description": "size:large,color:red",
                "price": 123.99,
                "sku": null
            },
            {
                "description": "size:large,color:blue",
                "price": 210.00,
                "sku": null
            }
        ],
        "price" : 580.00,
        "locales": "en_US",
        "details": {
            "en_US": {
                "name": "Bluetooth speaker",
                "description": "Perfect balanced sound quality. Support wireless and AUX-in."
            }
        }
    }),
    // update product
    10: () => os.creator.product.update(453, {
        "type": "PHYSICAL",
        "locales": "en_US",
        "options": {
            "en_US": {
                "color:color": "black:black,white:white,red:red,blue:blue",
                "size:size": "small:small,large:large"
            }
        },
        "details": {
            "en_US": {
                "name": "Bluetooth speaker V2.0",
                "description": "Perfect balanced sound quality. Support wireless and AUX-in. V2.0"
            }
        }
    }),
    // delete product
    11: () => os.creator.product.delete(453),
    // get most engaged hours statistics
    12: () => os.creator.stat.peak.get(),
    // get best sellers
    13: () => os.creator.stat.sale.get(),
    // get article classification info
    14: () => os.creator.stat.strength.get(),
    // get view info of your articles
    15: () => os.creator.stat.view.get(),
    // retrieve variants of a product
    16: () => os.creator.variant.get(36)
};

// execute specific test
tests[16]().then(result => console.log(result)).catch(error => console.log(error));

