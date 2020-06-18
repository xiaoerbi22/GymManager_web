
function register() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var dataJson = {"username": username, "password": password};
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', 'http://localhost:8080/api/user/register', true);
    httpRequest.setRequestHeader("Content-type","application/json");
    httpRequest.send(JSON.stringify(dataJson));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {
        if (httpRequest.status == 200) { //httpRequest.readyState == 4 &&
            console.log(httpRequest.responseText);//获取到服务端返回的数据
            alert(("注册成功"))
        }
        else{alert("fail");}
    };
    console.log("运行了");
}
function validate() {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("passwordConfirm").value;
    if(pwd1 == pwd2) {
        document.getElementById("tip").innerHTML="<font color='green'>两次密码相同</font>";
        document.getElementById("button").disabled = false;
    }
    else {
        document.getElementById("tip").innerHTML="<font color='red'>两次密码不相同</font>";
        document.getElementById("button").disabled = true;
    }
}

//localhost:8080/api/user/register

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dataJson = {"username": username, "password": password};
    console.log("运行了");
    $.ajax({
        type: 'post',
        url: 'localhost:8080/api/user/register',
        contentType: "application/json; charset=gbk",
        data : dataJson,
        // url解析成localhost:8080/api/user/register?username=xxxx&password=xxxx的格式
        // data: JSON.stringify(dataJson)
        // url解析成localhost:8080/api/user/register?{"username":"xxxx","password":"xxxx"}的格式
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        success: function (data) {
            alert("success");
        },
        error:function () {
            alert("fail");
        }
    });
}