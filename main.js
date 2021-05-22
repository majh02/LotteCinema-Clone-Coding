const header=document.querySelector('header');
const header_length=header.clientHeight;
const poster=document.getElementById('poster');

let styles=getComputedStyle(poster);
console.log(styles.getPropertyPriority('--header-size'));
poster.style.setProperty('--header-size',-header_length);
console.log(styles.getPropertyPriority('--header-size'));


const closeBtn=document.querySelector('.banner .closeBtn');
const banner=document.querySelector('.banner');

closeBtn.addEventListener('click',()=>{
    banner.remove();
});