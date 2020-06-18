

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var dataJson = {"username": username, "password": password};
    $.ajax({
        type: 'get',
        url: 'localhost:8080/api/user/register&username=&password',
        contentType: "application/x-www-form-urlencoded; charset=gbk",
        data : dataJson,
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        success: function (data) {
            $("#myID").text("Result:"+data.result)
        },
        error:function () {
            alert("fail");
        }
    });
}


/*localhost:8080/api/user/register

function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var obj = new Object();
    obj.username = username;
    obj.password = password;
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'localhost:8080/api/user/register', true);
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.status == 200) { //httpRequest.readyState == 4 &&
            console.log(httpRequest.responseText);//获取到服务端返回的数据
        }
    };
}
*/