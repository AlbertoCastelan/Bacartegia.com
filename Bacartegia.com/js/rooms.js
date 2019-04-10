//  DROPDOWN MENU
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });
});

// RETRIEVE DATA FROM JSON FILE
var officeInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function() {
  if (xhr.status === 200) {
    officeInfo = JSON.parse(xhr.responseText);
    console.log(officeInfo);
    displayRoom(0);
  }
};

function displayRoom(x) {
  //console.log(x);
  document.getElementById('office-name').innerHTML = officeInfo[x].name;
  document.getElementById('description').innerHTML = officeInfo[x].description;
  document.getElementById('photo').src = officeInfo[x].photo;
  document.getElementById('price').innerHTML = officeInfo[x].price;
}

var exec, deluxe, master, standard;
exec = document.querySelector('.btn-1');
deluxe = document.querySelector('.btn-2');
master = document.querySelector('.btn-3');
standard = document.querySelector('.btn-4');

// exec.addEventListener('click', e => {
//   e.preventDefault();
//   displayRoom(0);
// });

// deluxe.addEventListener('click', e => {
//   e.preventDefault();
//   displayRoom(1);
// });

// master.addEventListener('click', e => {
//   e.preventDefault();
//   displayRoom(2);
// });

// standard.addEventListener('click', e => {
//   e.preventDefault();
//   displayRoom(3);
// });

var buttons = document.querySelectorAll('.btn');
for (var i = 0; i < buttons.length; i++) {
  var self = buttons[i];

  self.addEventListener(
    'click',
    function(event) {
      // prevent browser's default action
      event.preventDefault();
      // call your awesome function here
      let values = document.getElementById(event.target.id);
      if (values !== null) {
        let numbers = Number(values.getAttribute('name'));
        console.log(numbers);
        displayRoom(numbers);
      }

      // 'this' refers to the current button on for loop
    },
    false
  );
}
