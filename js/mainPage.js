function toRegister(){
    location.assign('register.html');
}
function toLogin(){
    location.assign('login.html');
}
function move(obj,target,speed,callback) {
    clearInterval(timer);

    //获取原来的值
    let current;
    current = parseInt(getStyle(obj, "left"));
    //判断正负
    if(current>target){
        //此时速度为负数
        speed=-speed;
    }

    //开启定时器执行动画效果
    timer=setInterval(function () {
        //获取原来的值
        let oldValue=parseInt(getStyle(obj,"left"));
        //增加坐标
        let newValue =oldValue+speed;

        if(speed<0&&newValue<target){
            newValue=target;
        }
        obj.style.left=newValue+"px";
        if (newValue===target){
            clearInterval(timer);
            callback();
        }
    },30)
}
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    }
}