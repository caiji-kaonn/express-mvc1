$(function () {
    $('#tbody').on('click', 'a:last-child', function () {
        if (!confirm('删除吗？？？？')) {
            return;
        }
        // 获取id
        let _this = this;
        let id = $(this).attr('data-id');
        $.ajax({
            type: 'get',
            url: 'http://172.20.10.2:8080/deleteHero',
            data: {
                id
            },
            success: function (res) {
                if (res.code === 200) {
                    alert(res.msg);
                    $(_this).parents('tr').remove();
                }
            }
        })
    })
})