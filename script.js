const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //زمینه ذو بعدی واسه طراحی 
const brushw = document.querySelector('#brush-width');
const colorpick = document.querySelector('#color-picker');
const brush = document.querySelector('.brush');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const save = document.querySelector('.save');





let isdrawing = false;
let currentwidth = 5;
let currentcolor = "";

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

function startdraw() {
    isdrawing = true;
    ctx.beginPath();                       //باعث میشود هر بار در یهک نقطه جدید بتوتانبم شروع ب نقاشی کنیم
    ctx.lineWidth = currentwidth;          // عرض خط نقاشی را تیین میکند

}
function enddraw() {
    isdrawing = false;
}

function drawing(e) {
    if (!isdrawing) {
        return
    }
    ctx.lineTo(e.offsetX, e.offsetY)                      //با این متد میتواینمدوتا نقطه مشخص بکنیم یک مختصات ایکس و وای بهش بدیم و بعد ترسیم انجام بدیم//
    ctx.stroke();                                         // با این متد میتواینم خط را ترسیم میکند
    ctx.strokeStyle = `${currentcolor}`                                 // با این متد میتواینم رنگ قلم را تایین کنیم

}

brushw.addEventListener('change', () => {
    currentwidth = brushw.value;

})
colorpick.addEventListener('change', () => {
    currentcolor = colorpick.value;

})

canvas.addEventListener('mousedown', startdraw);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', enddraw);


eraser.addEventListener('click', () => {
    eraser.classList.add('active');
    brush.classList.remove('active');
    currentcolor = 'white'

})
brush.addEventListener('click', () => {
    brush.classList.add('active');
    eraser.classList.remove('active');
    currentcolor = colorpick.value;


})

clear.addEventListener('click', () => {

    ctx.fillRect(0, 0, 800, 450);   //با این متد میتوان از نقط ه صفر وصفر کنواس تا نقطه ای که مشخص کردیم یه مربع یا مستتطیل درست کینم
    //   وبا توجه به خط بالا رنگ ان را مشخص میکنیم در این صورت انگار صحقعه راه پاک کردیم
    // ctx.fillRect(0, 0,canvas.width,canvas.height);

})

save.addEventListener('click', () => {
    let link = document.createElement('a');
    link.download = 'jpj';
    link.href = canvas.toDataURL();
    link.click();
})
/////////////
