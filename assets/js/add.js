$(function () {
    // 获取数据， 点击新增把数据发送到服务器数据里，发送请求以post
    $('#sub').on('click', function () {
        let data = $('#myform').serialize();
        console.log(data);
        $.ajax({
            type: 'post',
            url: 'http://172.20.10.2:8080/addHeros',
            data,
            success: function (res) {
            console.log(res);
            }
        })
    })
})