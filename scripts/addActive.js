const sections = document.querySelectorAll('section');
const links = document.getElementsByClassName('main-nav__link');
window.addEventListener('scroll', () => {
  for (let i = 0; i < sections.length; i++) {
    const test = window.scrollY > sections[i].offsetTop - 30;

    if ((test && i === sections.length - 1)
    || (test && window.scrollY < sections[i+1].offsetTop - 30)) {
      links[i].classList.add('sliding-underline--active');
    } else  {
      links[i].classList.remove('sliding-underline--active');
    }
  }
});