// Toggle class active
const nav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  nav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active');
    }
});