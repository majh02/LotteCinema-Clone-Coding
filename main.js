const closeBtn=document.querySelector('.banner .closeBtn');
const banner=document.querySelector('.banner');

closeBtn.addEventListener('click',()=>{
    banner.remove();
});

const trailer=document.querySelector('.player button');
trailer.addEventListener('click',()=>{
    window.open("video/fastandfurious.mp4","","fullscreen");
});