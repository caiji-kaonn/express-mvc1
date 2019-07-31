// 处理请求逻辑和响应
const model = require('./数据分层')
let controller = {
    //  index页面
    getIndex(req, res) {
        model.readJson((arr) => {
            res.render('index', {
                arr
            });
        })
    },
    // 执行删除效果-根据id
    deleIndex(req, res) {
        //  获取id
        let id = req.query.id;
        // 如何确认点击删除，就是要获取的那个Id?---把点击的那个id拿到数据中的id作比较，
        // 如果是就删除
        model.readJson((arr) => {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    arr.splice(i, 1);
                    break;
                }
            }
            //    删完之后要把数据写入json
            model.writeJson(arr);
            // 再响应回去
            res.send({
                code: 200,
                msg: '删除成功了~'
            })
        })
    },
    // 实现新增网页，返回的是一个静态页面
    getAdd(req, res) {
        res.render('add', {});
    },
    // 实现新增英雄逻辑-编写Post请求端口
    addHeros(req, res) {
    console.log(req.body);
   model.readJson((arr)=>{
    model.getmaxId((maxId)=>{
        req.body.id=maxId+1;
        arr.push(req.body);
        model.writeJson(arr);
        res.send({code:200,msg:'新增成功啦'})
    })
   })
    }
};
module.exports = controller;