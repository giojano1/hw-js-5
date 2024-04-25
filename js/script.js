let burgerButton = document.querySelector("#burgerMenu");
let mobileNav = document.querySelector(".mobile-nav");
let closeButton = document.querySelector("#close");
burgerButton.addEventListener("click", function () {
  mobileNav.style.display = "block";
});
closeButton.addEventListener("click", function () {
  mobileNav.style.display = "none";
});
