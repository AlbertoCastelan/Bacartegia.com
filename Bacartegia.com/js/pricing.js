//  DROPDOWN MENU
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });
});

//  CALCULATE PRICES

function calculatePrice(e) {
  e.preventDefault();
  var days = document.querySelector('input').value;
  var selected = document.getElementById('rooms').value;
  var result = document.getElementById('show-result');

  class Office {
    constructor(type, price) {
      this.type = type;
      this.price = price;
    }
  }

  var exec = new Office('Executive', 450);
  var dlx = new Office('Deluxe', 250);
  var master = new Office('Master', 200);
  var stdrd = new Office('Standard', 150);

  if (selected === exec.type) {
    console.log(days * exec.price);
    return result.innerHTML = `<p id="final-price">The price for ${days} in an executive office is £${days *
      exec.price}</p>`;
  } else if (selected === dlx.type) {
    console.log(days * dlx.price);
    return result.innerHTML = `<p id="final-price">The price for ${days} in a deluxe office is £${days *
      dlx.price}</p>`;
  } else if (selected === master.type) {
    console.log(days * master.price);
    return result.innerHTML = `<p id="final-price">The price for ${days} in a master room is £${days *
      master.price}</p>`;
  } else if (selected === stdrd.type) {
    console.log(days * stdrd.price);
    return result.innerHTML = `<p id="final-price">The price for ${days} in a standard room is £${days *
      stdrd.price}</p>`;
  } else {
    console.log('Please input number of days');
  }
}

var button = document.querySelector('.submit');
button.addEventListener('click', calculatePrice);
