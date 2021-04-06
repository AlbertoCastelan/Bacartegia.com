const menuToggle = document.querySelector('.header__menu--toggle');
let toggleNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  toggleNav.classList.toggle('active')
})

// SLIDESHOW
var i = 0;
var images = [];
var time = 2000;

images[0] = 'img/office-1.jpg';
images[1] = 'img/office-2.jpg';
images[2] = 'img/office-3.jpg';
images[3] = 'img/office-4.jpg';
images[4] = 'img/office-5.jpg';
images[5] = 'img/office-6.jpg';

function changeImg() {
  document.querySelector('.pricing__images-slider').src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, time);
}

changeImg();

//  CALCULATE PRICES

let days, selected;
let result = document.querySelector('.pricing__offices-result');

function addText(event) {
    event.preventDefault();

    days = document.querySelector('.pricing__offices-days').value;
    selected = document.querySelector('.pricing__offices').value;
    
    let office = {
      price: {
        'Executive': 450,
        'Deluxe': 350,
        'Master': 250,
        'Standard': 200,
      },
    };
    let type = office.price[selected];
    let total = days * type;
    let discount = total - 0.2 * total;
    let saved = 0.2 * total;

    result.classList.remove('inactive');

    if(days >= 22) {
      result.innerHTML = `<p class="pricing__offices-price">Our maximum length of days is 21, please select a shorter stay.</p>`;
    } else if(days >= 14 && days <= 21) {
      result.innerHTML = `<p class="pricing__offices-price">The price for ${days} days in the ${selected} office is £${total}, you have earned a complimentary day!</p>`;
    } else if(days >= 5 && days <= 13) {
      result.innerHTML = `<p class="pricing__offices-price">The price for ${days} days in the ${selected} office is £
        ${discount}, you have saved £${saved}</p>`;
    } else if (days < 5 && days >= 1) {
      result.innerHTML = `<p class="pricing__offices-price">The price for ${days} days in the ${selected} office is £${total}</p>`;
    } else {
      result.innerHTML = `<p class="pricing__offices-price">Please enter a valid input in order to calculate the total price.</p>`;
    }

    setTimeout(() => result.classList.add('inactive'), 4000);    
};

var button = document.querySelector('.pricing__offices-submit');
button.addEventListener('click', addText);


