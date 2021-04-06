/* Dropdown Menu*/
const menuToggle = document.querySelector('.header__menu--toggle');
let toggleNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  toggleNav.classList.toggle('active')
});

/* About Description Show Hidden Text*/
const about = document.querySelector('.about__description-text');
const video = document.querySelector('.about__video-bg');

video.addEventListener('click', function() {
  about.classList.toggle('active');
})

// video.addEventListener('click', function() {
//   about.classList.remove('active');
// })
