let navBar = document.getElementById('nav');
console.log(navBar);
document.addEventListener('scroll',()=>{
    navBar.setAttribute('style','background-color: rgba(0,0,0,0.6) !important; ');
})