The Oneshop Javascript SDK, provides convenient way to access to the Oneshop API from both client-side and server-side JavaScript.

# Documentation
See the [API docs]:https://docs.oneshop.dev for JavaScript SDK.

# Installation
`npm i oneshop`

# Usage (Server-side)
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
    // merchant is required for calling merchant API
    merchant : {
        id : process.env.MERCHANT_USER, 
        token : process.env.MERCHANT_SECRET
    },
    // consumer is required for calling consumer API
    consumer : {
        id : process.env.CONCUMER_USER, 
        token : process.env.CONCUMER_SECRET
    },
    // creator is required for calling creator API
    creator : {
        id : process.env.CREATOR_USER, 
        token : process.env.CREATOR_SECRET
    }
});

// get profile
os.consumer.profile.get()
.then(result => console.log(result))
.catch(error => console.log(error));
```

# Usage (call from browser)
```javascript
const oneshop = require('oneshop');
// init oneshop
let os = new oneshop();
// set web mode
os.setWebMode();
// get profile
os.consumer.profile.get()
.then(result => console.log(result))
.catch(error => console.log(error));
```