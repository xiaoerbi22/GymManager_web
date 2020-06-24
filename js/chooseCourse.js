//import login.js
var Length;
var Data = [];
var metaData;
function viewCourseTable()
{
    var url = 'http://localhost:8081/Course/viewTable';
    $(document).ready(function () {
        $.ajax({
            type: 'get',
            url: url,
            contentType: "application/json",
            beforeSend:function(xhr){
                xhr.setRequestHeader("authorization", getCookie("token"));
            },
            success: function (data) {
                var obj = data.data;
                metaData = data.data;
                Length = obj.length;
                var tab = $("#tab");
                for (var i = 0; i < obj.length; i++){
                    var input = $("<input type='checkbox'  id='button'>")
                    var tr = $("<tr id='list'>");
                    var td1 = $("<td>");
                    var td2 = $("<td>");
                    var td3 = $("<td>");
                    var td4 = $("<td>");
                    var td5 = $("<td>");
                    var td6 = $("<td>");
                    var td7 = $("<td>");
                    td1.text(obj[i].courseId);
                    td2.text(obj[i].coachId);
                    td3.text(obj[i].courseName);
                    td4.text(obj[i].courseTime);
                    td5.text(obj[i].maxNumber);
                    td6.text(obj[i].studentNum);
                    td7.text(obj[i].classroom);
                    tr.append(td1);
                    tr.append(td2);
                    tr.append(td3);
                    tr.append(td4);
                    tr.append(td5);
                    tr.append(td6);
                    tr.append(td7);
                    tr.append(input);
                    tab.append(tr);
                }
            },
            error:function () {
                alert("fail");
            }
        });
    });
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
        {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

// 用于检查用户选择哪些课程，准备将用户选择的课程数据传入后台
function chooseButton(){
    $(function(){
        $("#tab").find(":checkbox:checked").each(function () {
            var val = $(this).parent().text();
            var flag = false;
            for(var i = 0; i < Data.length; i++){
                if(val == Data[i]){
                    flag = true;
                    break;
                }
            }
            if(!flag){
                Data.push(val);
            }
            console.log(Data);
        })
        chooseConfirm();
    })
}
// 二次确认，用户再次确认自己所选的课程，提升用户体验
function chooseConfirm() {
    var str = "您选择的课程是:\n"
    for(var i = 0; i < Data.length; i++){
        str = str + Data[i] + '\n';
    }
    if(Data.length != 0) {
        var r = confirm(str);
        if (r == true) {
            // 用户点击确认，数据传入后台，页面跳转

        } else {
            // 用户点击取消，清空Data
            Data = [];
        }
    }
    else{
        var r = alert("您还未选择课程！");
    }
}