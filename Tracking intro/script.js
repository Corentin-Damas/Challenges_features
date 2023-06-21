const navPhone = document.querySelector(".nav-phone");
const hamburgerBtn = document.querySelector(".nav__menu-hamburger");
const closeBtn = document.querySelector(".nav__menu-close");

console.log(self.innerWidth);

hamburgerBtn.addEventListener("click", () => {
  navPhone.classList.toggle("hide-phone-nav");
  closeBtn.classList.remove("hide-menu");
  hamburgerBtn.classList.add("hide-menu");
});

closeBtn.addEventListener("click", () => {
  navPhone.classList.toggle("hide-phone-nav");
  closeBtn.classList.add("hide-menu");
  hamburgerBtn.classList.remove("hide-menu");
});
