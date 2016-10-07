/**
 * Created by Administrator on 2016/10/6.
 */

var cur = 0;
var img = document.getElementsByClassName('img_one');
var left = document.getElementById('left');
for (var i = 0; i < 3; i++) {
    document.getElementById('imgAll').appendChild(img[i].cloneNode(true))
}
var len = img.length;
document.getElementById('right').onclick = function () {
    cur++;
    if (cur == len - 2) {
        cur = 1;
        document.getElementById('imgAll').style.left = 0;
    }
    animate(document.getElementById('imgAll'), {left: -406 * cur});
};

document.getElementById('left').onclick = function () {
    cur--;
    if (cur == -1) {
        cur = img.length - 4;
        document.getElementById('imgAll').style.left = -406 * (img.length - 3) + 'px';
    }
    animate(document.getElementById('imgAll'), {left: -406 * cur});
};
