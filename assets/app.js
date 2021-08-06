const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


const header = document.getElementById('header')

window.addEventListener('scroll', () => {
  if(window.scrollY > 220) {
    header.classList.add('shadow-md')
  } else {
    header.classList.remove('shadow-md')
  }
})