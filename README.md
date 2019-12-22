# Oneshop JavaScript SDK for Node
Provides convenient way to access to the Oneshop API from both client-side and server-side JavaScript.


[![Version](https://img.shields.io/npm/v/oneshop.svg)](https://www.npmjs.org/package/onehshop)
[![Downloads](https://img.shields.io/npm/dm/oneshop.svg)](https://www.npmjs.com/package/oneshop)
[![Try on RunKit](https://badge.runkitcdn.com/oneshop.svg)](https://runkit.com/npm/oneshop)
<br/>

## Documentation
See the [Oneshop Documentation](https://docs.oneshop.dev) for JavaScript SDK.

## Installation
`npm i oneshop`

## Usage (Server-side)

### credentials

You may update the credential anytime to fit your usage. see the example below.

```javascript
const oneshop = require('oneshop');
// init oneshop
let os = new oneshop();
// set credentials
os.setCredentials({
    // mall is required for calling mall API
    mall:{ 
        id : process.env.MALL_USER, 
        token : process.env.MALL_SECRET
    },
    merchant : {
        // merchant id can be obtained from mall.session.create() too
        // ensure the account owns at least one shop
        id : "Tm7xJuEHISPrtwQXWnaLtIPgpEYNJEqgq9gMdPmDClIV49jf",
        token : process.env.MALL_SECRET
    }
});

// update consumer credential
os.setCredentials({
    consumer : {
        // consumer id can be obtained from mall.session.create()
        id : "q9gMdPmDClIV8ZwxcGXy5s6m8LfECdkaccp6yqmIbMuk8jb1",
        token : process.env.MALL_SECRET
    }
});

```

### Example (User login and get profile)

```javascript
const oneshop = require('oneshop');
// init oneshop
let os = new oneshop();
// set credentials
os.setCredentials({
    // mall is required for calling mall API
    mall:{ 
        id : process.env.MALL_USER, 
        token : process.env.MALL_SECRET
    }
});

// login 
os.mall.session.create({
    email  : 'peter.chan@yopmail.com',
    passwd : '123456789'
})
// got session token
.then(tokens => Promise.resolve(tokens[0].token))
// set consumer credential (Store the token at somewhere and reuse it, unless it's expired.)
.then(token => os.setCredentials({ 
    consumer : { 
        id    : token, 
        token : process.env.MALL_SECRET 
    }
}))
// get consumer profile
.then(() => os.consumer.profile.get())
// got profile
.then(result => console.log(result))
// error?
.catch(error => console.log(error));
```

## Bug/Feature request?
Feel free to open an issue :)

## Enquiry
devops@oneshop.team

