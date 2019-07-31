// 把请求对象发到这里

const express = require('express');
const router = express.Router();
const controller = require('./controller');
router.get('/index', (req, res) => {
    controller.getIndex(req, res)
});
// 实现删除--以get方式请求
router.get('/deleteHero', (req, res) => {
    controller.deleIndex(req, res)
});
// 实现新增效果-点击新增，返回的是一个网页
router.get('/add', (req, res) => {
    controller.getAdd(req, res);
});
// 实现新增英雄--post
router.post('/addHeros', (req, res) => {
    controller.addHeros(req, res);
})
module.exports = router;