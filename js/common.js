/**
 * Created by Administrator on 2016/9/27.
 */
function $() {
    return document.getElementById(id)
}
function getstyle(obj,attr) {

    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}
function  animate(obj,json,callback) {
    //首先清除定时器，避免多次点击产生混乱。
    clearInterval(obj.timer);
  //生成一个定时器
    obj.timer=setInterval(function () {

        var flag=true;
        //遍历对象json
        for(var attr in json){

            //获取当前对象attr属性值

            var cur=parseInt(getstyle(obj,attr));
            //获取当前的目标值
            var target=json[attr];
            //获取速度
            var speed=(target-cur)/6;
            //对速度进行取整
            speed=target>cur?Math.ceil(speed):Math.floor(speed);
            //判断当前动画是否执行完毕，如果没有继续执行。
            if(target!=cur){
                obj.style[attr]=cur+speed+'px';
                flag=false;
            }
        }
        //当所有动画执行完毕，清除定时器。执行回调函数
        if(flag){
            clearInterval(obj.timer);
            //p判断用户是否传入回调函数，是否执行回调函数
            !!callback&&callback();
            // if(callback){
            //     callback();
            // }
        }



    },10)

    
}
