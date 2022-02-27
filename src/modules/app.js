import '../scss/styles.scss';

const navbarTogggler = document.querySelector('.navbar-toggler');
const navbarClose = document.querySelector('.navbar-close');
const navbar = document.querySelector('.navbar-collapse');
const logo = document.querySelector('.logo');

navbarTogggler.addEventListener('click', () => {
  navbar.classList.toggle('open');
  navbarClose.style.display = 'block';
  navbarTogggler.style.display = 'none';
  logo.style.display = 'none';
});

navbarClose.addEventListener('click', () => {
  navbar.classList.toggle('open');
  navbarClose.style.display = 'none';
  navbarTogggler.style.display = 'block';
  logo.style.display = 'block';
});

window.addEventListener('resize', () => {
  if (window.screen.width > 768 && navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    navbarClose.style.display = 'none';
  }

  if (window.screen.width < 768) {
    navbarTogggler.style.display = 'block';
    logo.style.display = 'block';
  }
});
