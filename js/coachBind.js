function coachBind() {

    var phoneTel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var idCardPattern = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let idCard = document.getElementById("IdCard").value;
    let birthday = document.getElementById("birthday").value;
    let sex = document.getElementById("sex").value;
    let sportEvent = document.getElementById("sportEvent").value;

    if (!phoneTel.test(phoneNumber))
        alert("请输入正确的手机号码");
    if (!idCardPattern.test(idCard))
        alert("请输入正确的身份证号码");

    if (phoneTel.test(phoneNumber) && idCardPattern.test(idCard)) {
        let url = 'http://localhost:8080/api/coach/createCoach';

        let bindDate = {
            "coach_id": getCookie("uid"),
            "name": name,
            "phoneNumber": phoneNumber,
            "idcard": idCard,
            "birthday": birthday,
            "sex": sex,
            "sportsEvent": sportEvent
        }

        console.log(bindDate);

        $.ajax({
            type: 'post',
            url: url,
            contentType: 'application/json',
            headers:{'Authorization':getCookie("token")},
            data: JSON.stringify(bindDate),
            dataType: 'json',

        })
    }
}

//获取token里面东西的值，要token就传“token”，要uid就传“uid”
function getCookie(cname){
    //传进来的cname和'='连起来
    let name = cname + "=";
    //以；为分隔标志分隔cookie的内容
    let ca = document.cookie.split(';');
    //对分隔的内容进行判断
    for(let i=0; i<ca.length; i++) {
        //删除字符串的头尾空格
        let c = ca[i].trim();
        if (c.indexOf(name)==0)
        {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}