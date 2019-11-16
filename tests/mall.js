require('dotenv').config()
const oneshop = require('../index');


// init oneshop
let os = new oneshop();
// set credentials
os.setCredentials({mall:{ id : process.env.MALL_USER, token : process.env.MALL_SECRET}})

let tests = {
    // get articles
    0: () => os.mall.article.get(),
    // 1. get consumers
    1: () => os.mall.consumer.get(),
    // 2. add consumer
    2: () => os.mall.consumer.add({email : 'peter.chan@oneshop.com', first_name : 'Peter', last_name : 'Chan', passwd : 'ThisIsaVeryLongPassword', confpasswd : 'ThisIsaVeryLongPassword'}),
    // 3. get merchandises
    3: () => os.mall.merchandise.get(),
    // 4. get profiles
    4: () => os.mall.merchant.get(),
    // 5. create order
    5: () => os.mall.order.create({
        items:[{id:'0y2h4g02hg280f47f72490724ft7', qty:1, courier:'64b5d8b2-4c60-4faf-bf1b-9f7b1b7ca1c8'}], 
        contact:{ first_name:'Peter', last_name:'Cheng', email:'peter.chan@oneshop.com', phone:'+85236202322'}, 
        shipping:{address:'1/F, Camelpaint Building Block 1, Kwun Tong, Kowloon, Hong Kong'}, 
        payment:{card:'4242424242424242', csc:'123', exp_date:'08/23'}}),
    // 6. quote shipping rate
    6: () => os.mall.shipping.rate([{id:"0d990fa9636db56c6349320acba1a0c6499a1db3", qty:1}], '1/F, Camelpaint Building Block 1, Kwun Tong, Kowloon, Hong Kong'),
    // 7. login
    7: () => os.mall.session.create({email:'peter.chan@yopmail.com',passwd:'123456789'}),
    // get shops
    8: () => os.mall.shop.get({page:2}),
    // update shop
    9: () => os.mall.shop.update(12345, {status:'ACTIVE'}),
    // get timeslots
    10: () => os.mall.shipping.timeslot('64b5d8b2-4c60-4faf-bf1b-9f7b1b7ca1c8'),
    // create validation
    11: () => os.mall.validation.create({ email:'lawson@oneshop.team', type:'code'}),
    // consume validation
    12: () => os.mall.validation.consume({code:'A1B2C3',passwd:'WeakPassword',confPasswd:'WeakPassword'}, 123),
    // get vouchers
    13: () => os.mall.voucher.get({codes:'code1000'})
};

// execute specific test
tests[13]().then(result => console.log(result)).catch(error => console.log(error));
