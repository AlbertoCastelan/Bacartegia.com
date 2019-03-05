//  DROPDOWN MENU
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });
});

//  CREATE A SLIDESHOW
var i = 0;
var time = 2000;
var images = [
  'img/office-1.jpg',
  'img/office-2.jpg',
  'img/luxuryoffice.jpg',
  'img/bookshelves.jpg',
  'img/chairs.jpg',
  'img/businesscoffee.jpg'
];

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

setInterval(changeImg, time);
