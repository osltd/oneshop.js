require('dotenv').config();
const oneshop = require('../index');


// test pass credentials when construct
let os = new oneshop({mall:{ id : process.env.MALL_USER, token : process.env.MALL_SECRET}});
console.log(os.getCredentials())


// test set credential
let os = new oneshop();
os.setCredentials({mall:{ id : process.env.MALL_USER, token : process.env.MALL_SECRET}});
console.log(os.getCredentials())