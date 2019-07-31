// express构建服务器
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
app.listen(8080, '172.20.10.2', () => {
    console.log('服务器已启用，可通过http://172.20.10.2:8080 访问');
})
// 静态资源
app.use('/assets', express.static('assets'));
// 动态资源--ejs渲染动态结构
// 设置ejs为默认的模板引擎
app.set('view engine', 'ejs');
// post--bodyparser中间件
app.use(bodyParser.urlencoded({extended: false}));
// 注册路由中间件
app.use(router);