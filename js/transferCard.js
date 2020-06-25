function transferCard() {
    var oldVipId =document.getElementById('oldVipId').value;
    var newVipId=document.getElementById('newVipId').value;
    var dataJson={"oldPhone":oldVipId, "newPhone":newVipId};
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/api/vip/vipTransfer",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify(dataJson),
        dataType:"json",
        beforeSend:function(xhr){
            xhr.setRequestHeader("authorization", getCookie("token"));
        },
        success:function (data) {
            console.log(data);
            alert(data.message);
        },
        error:function () {
            alert("fail");
        }
    })
}

function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function click1()
{
	var vipPhoneNumber = document.getElementById("vipPhoneNumber").value;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', "http://localhost:8080/api/vip/queryByPhone/"+vipPhoneNumber, true);
	console.log("http://localhost:8080/api/vip/queryByPhone/"+vipPhoneNumber);
	httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            var str="";
            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px;padding-top:20px; margin-top:20px;">';
            str+= '<tr>';
            str+='<th>会员ID</th>';
            str+= '<th>会员身份证</th>';
             str+='<th>会员姓名</th>';
            str+='<th>会员手机号</th>';
            str+= '<th>会员生日</th>';
             str+='</tr>';
             str+='<tr>';
            for(x in data)
            {
                  
                  str+='<td>'+data[x]+'</td>'  ;
                  
            }
            str+='</tr>';
             str+='</table>';
             document.getElementById("hang").innerHTML=str;
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function click2()
{
	var coachPhoneNumber = document.getElementById("coachPhoneNumber").value;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://localhost:8080/api/coach/queryByPhone/'+coachPhoneNumber, true);
	
	httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            var str="";
            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px; padding-top:20px; margin-top:20px;">';
            str+= '<tr>';
            str+='<th>教练ID</th>';
            str+= '<th>身份证</th>';
             str+='<th>姓名</th>';
            str+='<th>手机号</th>';
            str+= ' <th>生日</th>';
            str+= ' <th>性别</th>';
            str+= ' <th>擅长</th>';
             str+='</tr>';
             str+='<tr>';
            for(x in data)
            {
               str+='<td>'+data[x]+'</td>';    
            }
            str+='</tr>';
             str+='</table>';
             document.getElementById("dang").innerHTML=str;
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function click3()
{
	var courseName= document.getElementById("courseName").value;
	if(courseName=="")
	{
	    click32();	
	}
	else{
		click31();
	}
}
function click32()
{
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
	var pageNum=1; var pageSize=10;
    httpRequest.open('GET', 'http://localhost:8080/Course/query/'+pageNum+'/'+pageSize, true);
    httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            console.log(data.data);
            var str="";
            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px;padding-top:20px; margin-top:20px;">';
            str+= '<tr>';
            str+=' <th>教练ID</th>';
            str+='<th>教练姓名</th>';
            str+= '<th>当前人数</th>';
             str+='<th>名称</th>';
            str+='<th>容量</th>';
            str+= ' <th>教室</th>';
            str+= ' <th>课程ID</th>';
            str+= '<th>开课次数</th>';
             str+='</tr>';
            for(x in data.records)
            {
                  str+='<tr>';
                  for( y in data.records[x])
                  {
                	    str+='<td>'+data.records[x][y]+'</td>'  ;
                  }
                  str+='</tr>';
            }
             
             str+='</table>';
             str+='<input type="button" value="上一页" onclick="previousPage(';
                 str+=pageNum+','+pageSize+')"  style="margin-left:820px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
             str+='<input type="button" value="下一页" onclick="nextPage(';
             str+=pageNum+','+pageSize+')"  style="margin-left:10px;margin-bottom:20px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
             document.getElementById("fang").innerHTML=str;
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function nextPage(pageNum,pageSize)
{
	var pageNum1=pageNum+1;
	var pageSize1=pageSize;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', 'http://localhost:8080/Course/query/'+pageNum1+'/'+pageSize1, true);
    httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            console.log(data.data);
            var str="";
            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px;padding-top:20px; margin-top:20px;">';
            str+= '<tr>';
            str+=' <th>教练ID</th>';
            str+='<th>教练姓名</th>';
            str+= '<th>当前人数</th>';
             str+='<th>名称</th>';
            str+='<th>容量</th>';
            str+= ' <th>教室</th>';
            str+= ' <th>课程ID</th>';
            str+= '<th>开课次数</th>';
             str+='</tr>';
            for(x in data.records)
            {
                  str+='<tr>';
                  for( y in data.records[x])
                  {
                	    str+='<td>'+data.records[x][y]+'</td>'  ;
                  }
                  str+='</tr>';
            }
             
             str+='</table>';
             str+='<input type="button" value="上一页" onclick="previousPage(';
             str+=pageNum1+','+pageSize1+')"  style="margin-left:820px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
             str+='<input type="button" value="下一页" onclick="nextPage(';
             str+=pageNum1+','+pageSize1+')"  style="margin-left:10px;margin-bottom:20px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
             document.getElementById("fang").innerHTML=str;
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function previousPage(pageNum,pageSize)
{
		var pageNum1=pageNum-1;
		var pageSize1=pageSize;
		var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
	    httpRequest.open('GET', 'http://localhost:8080/Course/query/'+pageNum1+'/'+pageSize1, true);
	    httpRequest.setRequestHeader("Authorization", getCookie("token"));
	    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

	    httpRequest.onreadystatechange = function () {
	        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
	            var json = httpRequest.responseText;//获取到json字符串，还需解析
	            console.log(json);
	            var data=JSON.parse(json);
	            console.log(data.data);
	            var str="";
	            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px;padding-top:20px; margin-top:20px;">';
	            str+= '<tr>';
	            str+=' <th>教练ID</th>';
                            str+='<th>教练姓名</th>';
                            str+= '<th>当前人数</th>';
                            str+='<th>名称</th>';
                            str+='<th>容量</th>';
                            str+= ' <th>教室</th>';
                            str+= ' <th>课程ID</th>';
                            str+= '<th>开课次数</th>';
	             str+='</tr>';
	            for(x in data.records)
	            {
	                  str+='<tr>';
	                  for( y in data.records[x])
	                  {
	                	    str+='<td>'+data.records[x][y]+'</td>'  ;
	                  }
	                  str+='</tr>';
	            }
	             
	             str+='</table>';
	             str+='<input type="button" value="上一页" onclick="previousPage(';
	                 str+=pageNum1+','+pageSize1+')"  style="margin-left:820px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
	            	 str+='<input type="button" value="下一页" onclick="nextPage(';
	             str+=pageNum1+','+pageSize1+')"  style="margin-left:10px;margin-bottom:20px; color:#fff; width:100px; background-color:#6666FF; border-color:#6666FF"> ';
	             document.getElementById("fang").innerHTML=str;
	         	$(".let").css({ 
	        		"height": $(document).height()-336//浏览器当前窗口文档高度
	        		}); 
	        }
	        else {alert(httpRequest.status);}
	    };
}
function click31()
{
	var courseName= document.getElementById("courseName").value;
	var courseNameRequest =new Object();
	courseNameRequest.courseName=courseName;
	var CourseInfoJson=JSON.stringify(courseNameRequest);
	alert(CourseInfoJson);
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', 'http://localhost:8080/Course/queryByName', true);
    httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.setRequestHeader("Content-type","application/json");
    httpRequest.send(CourseInfoJson);//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            console.log(data.data);
            var str="";
            str+='<table border="1" style="margin-top:30px; width:100%; padding-left:0px;padding-top:20px; margin-top:20px;">';
            str+= '<tr>';
            str+=' <th>教练ID</th>';
            str+='<th>教练姓名</th>';
            str+= '<th>当前人数</th>';
             str+='<th>名称</th>';
            str+='<th>容量</th>';
            str+= ' <th>教室</th>';
            str+= ' <th>课程ID</th>';
            str+= '<th>开课次数</th>';
             str+='</tr>';
            for(x in data)
            {
                  str+='<tr>';
                  for( y in data[x])
                  {
                	    str+='<td>'+data[x][y]+'</td>'  ;
                  }
                  str+='</tr>';
            }
             
             str+='</table>';
             document.getElementById("fang").innerHTML=str;
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function click4()
{
	var courseId= document.getElementById("deleteCourseId").value;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', 'http://localhost:8080/Course/delete', true);
    httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send("CourseId="+courseId);//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
            console.log(data);
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function click5()
{
	var coachID= document.getElementById("deleteCoachId").value;
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('POST', 'http://localhost:8080/api/coach/deleteCoach'+'/'+coachID, true);
	
	httpRequest.setRequestHeader("Authorization", getCookie("token"));
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            var data=JSON.parse(json);
         	$(".let").css({ 
        		"height": $(document).height()-336//浏览器当前窗口文档高度
        		}); 
        }
        else {alert(httpRequest.status);}
    };
}
function setCookie()
{
	var cname="token";
	var cvalue="Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxIiwic3ViIjoiY2YiLCJleHAiOjE1OTI5ODA4MDQsImlhdCI6MTU5Mjg5NDQwNH0.Co-N7ycjE3juyLgWPEVheo-fjUy_ri-WSGkJpFMWtXM";
	var exdays= 1;
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    console.log(expires);
    document.cookie = cname+"="+cvalue+"; "+expires;
    var s= document.cookie;
    console.log(s);
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
        {
        	console.log(c.substring(name.length,c.length));
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function Vip(){
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
    $("form div").eq(0).addClass("current");
}
function Coach(){
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
    $("form div").eq(1).addClass("current");
}
function Course(){  
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
	 $("form div").eq(2).addClass("current");	  
	}
function deleteCourse(){  
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
	 $("form div").eq(3).addClass("current");	  
	}
function deleteCoach(){  
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
	 $("form div").eq(4).addClass("current");	  
	}
function vipCard()
{
	var index = $("form .current").index();
	$("form div").eq(index).removeClass("current");
    $("form div").eq(5).addClass("current");
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
    console.log("get cookie fail");
    return "";
}
show=function(li)
{
	  var a=li.getElementsByTagName("ul")[0];
	  var b=li.getElementsByTagName("img")[0];
	  var c=li.getElementsByTagName("img")[1];
	  if(a.style.display=="block") 
	{
	    a.style.display="none";
	    c.style.display="block";
	    b.style.display="none";
    }
	  else{
	  a.style.display="block";
	  c.style.display="none";
	  b.style.display="block";}
}
hide=function(li)
{
	  var a=li.getElementsByTagName("ul")[0];
	  a.style.display="none";
}
window.onload = function ()
    {
	$(".let").css({ 
		"height": $(document).height()-40//浏览器当前窗口文档高度
		}); 
	}

