
const hamburger = document.querySelector('.hamburger');
const headerContainer = document.querySelector('.header__container');

hamburger.addEventListener('click', () => {
  headerContainer.classList.toggle('menu-open');
});
