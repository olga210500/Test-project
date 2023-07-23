const hamburger = document.querySelector(".hamburger");
const headerContainer = document.querySelector(".header__container");

hamburger.addEventListener("click", () => {
  headerContainer.classList.toggle("menu-open");
});

const navItems = document.querySelectorAll(".nav a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
