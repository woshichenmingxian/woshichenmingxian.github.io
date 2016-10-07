/**
 * Created by Administrator on 2016/10/6.
 */
/第一个轮播/
var cur = 0;
var img = document.getElementsByClassName('img_one');
var left = document.getElementById('left');
for (var i = 0; i < 3; i++) {
    document.getElementById('imgAll').appendChild(img[i].cloneNode(true))
}
//右键
var len = img.length;
document.getElementById('right').onclick = function () {
    cur++;
    if (cur == len - 2) {
        cur = 1;
        document.getElementById('imgAll').style.left = 0;
    }
    animate(document.getElementById('imgAll'), {left: -406 * cur});
};
// /左键/
document.getElementById('left').onclick = function () {
    cur--;
    if (cur == -1) {
        cur = img.length - 4;
        document.getElementById('imgAll').style.left = -406 * (img.length - 3) + 'px';
    }
    animate(document.getElementById('imgAll'), {left: -406 * cur});
};




// var imgDisplay=document.getElementsByClassName('img_display');
// for(var i =0;i<imgDisplay.length;i++){
//     imgDisplay[i].index=i;
//     imgDisplay[i].onmouseover=function () {
//
//         imgDisplay[this.index].style.display='block';
//
//     }
// }






//第二个轮播
var hotImg=document.getElementById('hotImg').getElementsByTagName('a');
document.getElementById('hotImg').appendChild(hotImg[0].cloneNode(true));

var text=document.getElementsByClassName('hot_zi');
document.getElementById('hotWenzi').appendChild(text[0].cloneNode(true));

var le=hotImg.length;
var te=text.length;
var la=0;
function bleft() {
    la--;
    if (la==-1) {
        la = le - 2;
        document.getElementById('hotImg').style.left = -(le - 1) * 890 + 'px';
        document.getElementById('hotWenzi').style.top = -(le - 1) * 120 + 'px';
    }
    animate(document.getElementById('hotImg'),{left:-890*la});
    animate(document.getElementById('hotWenzi'),{top:-120*la});
}
function bright() {
    la++;
    if(la==le){
        la=1;
        document.getElementById('hotImg').style.left = '0';
        document.getElementById('hotWenzi').style.top ='0';
    }
    animate(document.getElementById('hotImg'),{left:-890*la});
    animate(document.getElementById('hotWenzi'),{top:-120*la});
}


//定时器
var timer1;
timer1=setInterval(function () {
    bleft()
},3000);
//鼠标移上去，清除定时器
document.getElementById('hotHidden').onmouseover=function () {
    clearInterval(timer1);
    document.getElementById('hotleft').onclick=function () {
        bleft()
    };
    document.getElementById('hotright').onclick=function () {
        bright()
    };
};
//鼠标离开，重启定时器
document.getElementById('hotHidden').onmouseout=function () {
    timer1=setInterval(function () {
        bleft()
    },3000);

};











//第三个轮播




//按钮
var a=document.getElementById('EnvironmentBigimg').getElementsByTagName('a');
document.getElementById('EnvironmentBigimg').appendChild(a[0].cloneNode(true));
var ss=document.getElementsByClassName('Environment_bottom');
document.getElementById('EnvironmentBottomul').appendChild(ss[0].cloneNode(true));


var topicsLeft=document.getElementById('topicsLeft');
var topicsRight=document.getElementById('topicsRight');

var zz=0;

function tLeft() {
    zz--;
    if(zz==-1) {
        zz = a.length - 2;
        document.getElementById('EnvironmentBigimg').style.left = -890 * (a.length - 1) + 'px';
        document.getElementById('EnvironmentBottomul').style.top = -182 * (a.length - 1) + 'px';
    }
    animate(document.getElementById('EnvironmentBigimg'),{left:-890 *zz});
    animate(document.getElementById('EnvironmentBottomul'),{top:-182 *zz});



}


function tright(){
    zz++;
    if(zz==a.length){
        zz=1;
        document.getElementById('EnvironmentBigimg').style.left = '0';
        document.getElementById('EnvironmentBottomul').style.top = '0';
    }
    animate(document.getElementById('EnvironmentBigimg'),{left:-890 *zz});
    animate(document.getElementById('EnvironmentBottomul'),{top:-182 *zz});
}


document.getElementById('topicsNav').onmouseover=function () {
    clearInterval(timer);
    topicsLeft.onclick=function () {
        tLeft()


    };
    topicsRight.onclick=function () {
        tright()

    };


};

document.getElementById('topicsNav').onmouseout=function () {

    timer=setInterval(function () {
        tright()
    },3000);

};



var timer;
timer=setInterval(function () {
    tright()
},3000);

