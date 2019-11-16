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
    merchant : {
        id : process.env.MERCHANT_USER, 
        token : process.env.MERCHANT_SECRET
    }
})

let tests = {
    // Get shop info and settings
    0: () => os.merchant.shop.profile(),
    // Update shop settings
    1: () => os.merchant.shop.update({tags:'fashion,stylish', name:'Fashion Shop'}),
    // Destroy shop
    2: () => os.merchant.shop.delete(),
    // Get commits of a theme
    3: () => os.merchant.theme.commit.get(3, {page: 2}),
    // Get coupons from your shop
    4: () => os.merchant.coupon.create({title:"Summer sale", tags:'summer,sale',end_time:'2029-08-08T08:30:00Z',type:'fixed',rate:50,min_charge:0,mix_charge:100.50}),
    // get your shop's coupons
    5: () => os.merchant.coupon.get({page:1}),
    // update coupon by id
    6: () => os.merchant.coupon.update(1234, {title:"Winter sale", tags:'winter,sale'}),
    // delete coupon
    7: () => os.merchant.coupon.delete(1234),
    // get customer
    8: () => os.merchant.customer.get({page:2}),
    // update customer
    9: () => os.merchant.customer.update(1234, {field1:'value1', field2:'value2'}),
    // get displays
    10: () => os.merchant.catalog.get({page:2}),
    // get domains of your shop
    11: () => os.merchant.domain.get(),
    // add domain to your shop
    12: () => os.merchant.domain.add({name:'foo.shop.com', stage:'production'}),
    // remove domain from your shop by id
    13: () => os.merchant.domain.delete(1234),
    // get chats of your shop from users
    14: () => os.merchant.message.enquirer({page:1}),
    // get messages from specific enquirer
    15: () => os.merchant.message.get(5231, {page:1}),
    // send messages to specific enquirer
    16: () => os.merchant.message.send(5231, { content:"Hellow", attachments:'https://foo.com/foo.pdf,https://goo.com/goo.pdf'}),
    // get your shop's items
    17: () => os.merchant.item.get(),
    // get orders
    18: () => os.merchant.order.get(),
    // get shipment info
    19: () => os.merchant.order.shipment.get("HG3v7XWAnMgq140"),
    // arrange pickup service
    20: () => os.merchant.order.shipment.pickup("HG3v7XWAnMgq140",{
        preferred_date : "2019-11-01",
        preferred_max_time : "2019-11-01T13:00:00Z",
        preferred_min_time : "2019-11-01T15:00:00Z"
    }),
    // update order by id
    21: () => os.merchant.order.update("HG3v7XWAnMgq140", {notes : "Packed, ready to ship."}),
    // get post from your shop
    22: () => os.merchant.post.get({start_time: "2019-01-01T00:00:00Z"}),
    // get stocks of a variant of an item
    23: () => os.merchant.item.stock(412, 1353).get(),
    // set stock to 100 for a variant of an item
    24: () => os.merchant.item.stock(412, 1353).set(100),
    // retrieve teammates of your shop
    25: () => os.merchant.teammate.get(),
    // add teammate to your shop
    26: () => os.merchant.teammate.add({username:"foo@foo.com", scope:"admin"}),
    // update teammate
    27: () => os.merchant.teammate.update(1493, {scope:"admin"}),
    // delete
    28: () => os.merchant.teammate.remove(1493),
    // get themes
    29: () => os.merchant.theme.get(),
    // create theme
    30: () => os.merchant.theme.create(),
    // get coupon usage
    31: () => os.merchant.coupon.usage(90),
    // set variant stock (alternative of 24)
    32: () => os.merchant.item.variant(412, 1353).update({stock:100})
};

// execute specific test
tests[0]().then(result => console.log(result)).catch(error => console.log(error));

