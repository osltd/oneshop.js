const oneshop = require('../index');
const os = new oneshop();

os.setShopDomain('https://javascript.oneshop.host');

os.mall.article.get().then(articles => console.log(articles)).catch(error => console.log(error));


