const closeBtn=document.querySelector('.banner .closeBtn');
const banner=document.querySelector('.banner');

closeBtn.addEventListener('click',()=>{
    banner.remove();
});

const trailer=document.querySelector('.player button');
trailer.addEventListener('click',()=>{
    window.open("video/fastandfurious.mp4","","fullscreen");
});

var poster=document.querySelectorAll('.ranking img');
for(var i=0;i<poster.length;i++){
    poster[i].addEventListener('hover',()=>{
        console.log('hover');
    })
}

var heart_btn=document.querySelectorAll('.ranking .heart');
function clickMenuHandler(){
    this.classList.add('heart-active');
}
for(var i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener('click',clickMenuHandler);
}