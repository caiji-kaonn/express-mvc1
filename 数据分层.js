// 处理读取json和转数组
const fs = require('fs');
let model = {
    // 读取json，并转数组
    readJson(callback) {
        fs.readFile('./data/heros.json', 'utf-8', (err, data) => {
            if (err) console.log(err);
            let arr = JSON.parse(data);
            callback(arr);
        })
    },
    // 写入json---先转格式再写入json
    writeJson(arr) {
        let content = JSON.stringify(arr);
        fs.writeFile('./data/heros.json', content, 'utf-8', (err) => {
            if (err) console.lor(err);
        })
    },
    // 求出最大id值
    getmaxId(callback){
        this.readJson(arr=>{
            let id=arr[0].id;
            for(var i=1;i<arr.length;i++){
                if(arr[i].id>id){
                    id=arr[i].id
                }
            }
            callback(id)
        })
    }
};
module.exports = model;