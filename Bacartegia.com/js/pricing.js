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

  if (selected === 'Executive') {
    console.log(days * 450);
    result.innerHTML = `<p id="final-price">The price for ${days} in an executive office is £${days *
      450}</p>`;
  } else if (selected === 'Deluxe') {
    console.log(days * 250);
    result.innerHTML = `<p id="final-price">The price for ${days} in a deluxe office is £${days *
      350}</p>`;
  } else if (selected === 'Master') {
    console.log(days * 200);
    result.innerHTML = `<p id="final-price">The price for ${days} in a master room is £${days *
      250}</p>`;
  } else if (selected === 'Standard') {
    console.log(days * 150);
    result.innerHTML = `<p id="final-price">The price for ${days} in a standard room is £${days *
      200}</p>`;
  } else {
    console.log('Please input number of days');
  }
}

var button = document.querySelector('.submit');
button.addEventListener('click', calculatePrice);
