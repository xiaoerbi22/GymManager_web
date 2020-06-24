function attendClass(){
    var url = 'http://localhost:8081/api/vip/attendClass';
    /*
    {
      "classroom": "string",
      "courseId": "string",
      "vipId": "string"
    }
     */
    $.ajax({
        type:'post',
        url: url,
        contentType:"application/json",
        // data:JSON.stringify(data),
        success: function (data) {
            console.log(data);
        },
        error:function () {
            alert("fail");
        }
    })
    alert("登记上课成功！")
}
function finishClass(){
    // 'http://localhost:8081/api/vip/finishClass/{lastOnClassId}';
    alert('成功下课!');
}