function coachBind() {

    //alert(黄廉栋好帅);

    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let idCard = document.getElementById("IdCard").value;
    let birthday = document.getElementById("birthday").value;
    let sex = document.getElementById("sex").value;
    let sportEvent = document.getElementById("sportEvent").value;

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