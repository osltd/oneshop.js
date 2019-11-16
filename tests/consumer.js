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
    0: () => os.consumer.signature.create('image/jpg'),
    // add credential to consumer account
    1: () => os.consumer.credential.create({token:'+85291234567',type:'phone'}),
    // retrieve credentials
    2: () => os.consumer.credential.get(),
    // remove credential by id
    3: () => os.consumer.credential.delete(123),
    // get chats from shops
    4: () => os.consumer.message.enquiries(),
    // get messages between shops
    5: () => os.consumer.message.get({page:1}, 123),
    // send messages to shop
    6: () => os.consumer.message.send(123, {content:'Hello!'}),
    // get notifications
    7: () => os.consumer.notification.get(),
    // update notifications (Deprecated?)
    8: () => os.consumer.notification.update(18136,'deleted'),
    // create payment
    9: () => os.consumer.payment.pay({
        items:[{id:'0y2h4g02hg280f47f72490724ft7', qty:1, courier:'64b5d8b2-4c60-4faf-bf1b-9f7b1b7ca1c8'}], 
        contact:{ first_name:'Peter', last_name:'Cheng', email:'peter.chan@oneshop.com', phone:'+85236202322'}, 
        shipping:{address:'1/F, Camelpaint Building Block 1, Kwun Tong, Kowloon, Hong Kong'}, 
        payment:{card:'4242424242424242', csc:'123', exp_date:'08/23'}}),
    // get payment
    10: () => os.consumer.payment.get({page:2}),
    // get projects
    11: () => os.consumer.project.get({page:1}),
    // update project settings
    12: () => os.consumer.project.update(1234, {repo_url:'https://github.com/foo/foo.git', prod_branch:'master', test_branch:'develop', src_dirname:'/public'}),
    // set reaction of article
    13: () => os.consumer.feed.react(1234, 'love'),
    // get repositories
    14: () => os.consumer.repository.get(),
    // logout
    15: () => os.consumer.session.destroy(),
    // get profile
    16: () => os.consumer.profile.get(),
    // update profile
    17: () => os.consumer.profile.update({ first_name: 'Peter', last_name : 'Chan'})
};

// execute specific test
tests[17]().then(result => console.log(result)).catch(error => console.log(error));

