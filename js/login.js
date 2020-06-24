function login()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var url = 'http://localhost:8081/auth/';
    url = url + username + '/' + password
    $.ajax({
        type: 'post',
        url: url,
        contentType: "application/json",
        success: function (data) {
            var token = 'Bearer ' + data.token;
            setCookie("token", token, 1);
            //location.assign('chooseCourse.html');
            let jwt_token = decodeURIComponent(escape(window.atob(data.token.split('.')[1])))
            let result = JSON.parse(jwt_token).uid;
            setCookie("uid", result, 1);
            console.log(result);
            console.log(data.token);
            console.log((JSON).parse(jwt_token));
            console.log(document.cookie);
        },
        error:function () {
            alert("fail");
        }
    });
}
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
