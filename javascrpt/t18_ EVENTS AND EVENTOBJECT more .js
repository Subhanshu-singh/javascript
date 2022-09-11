console.log('tut 18');
/*
let btn=document.getElementById('btn');
btn.addEventListener('click',fun1);
btn.addEventListener('dbclick',fun2);
btn.addEventListener('mousedown',fun3);
function fun1(e){
    console.log('thanks',e);
    e.preventDefault();
}
function fun2(e){
    console.log('double clik thanks ',e);
    e.preventDefault();
}
function fun3(e){
    console.log('mouse down clik thanks ',e);
    // document.body.style.background='red';
    e.preventDefault();
}
*/

document.querySelector('.no').addEventListener('mousemove',function(e){
    console.log(e.offssetX,e.offssetY);
    document.body.style.background="rgb({e.offsetX},${e.offX},${e.sety})";
    console.log("you are triggr")

})