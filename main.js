const closeBtn=document.querySelector('.banner .closeBtn');
const banner=document.querySelector('.banner');

closeBtn.addEventListener('click',()=>{
    banner.remove();
});
