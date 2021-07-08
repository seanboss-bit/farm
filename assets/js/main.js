const toggle = document.querySelector(".bars");
const links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("lol");
  links.classList.toggle("lol");
});