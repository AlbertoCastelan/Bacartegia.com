const menuToggle = document.querySelector('.header__menu--toggle');
let toggleNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  toggleNav.classList.toggle('active')
})


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
  document.querySelector('.rooms__office-name').innerHTML = officeInfo[x].name;
  document.querySelector('.rooms__description').innerHTML = officeInfo[x].description;
  document.querySelector('.rooms__photo').src = officeInfo[x].photo;
  document.querySelector('.rooms__price').innerHTML = officeInfo[x].price;
}

var buttons = document.querySelectorAll('.rooms__btn');
for (var i = 0; i < buttons.length; i++) {
  var self = buttons[i];

  self.addEventListener(
    'click',
    function(e) {
      e.preventDefault();
      let values = document.getElementById(e.target.id);
      if (values !== null) {
        let numbers = Number(values.getAttribute('name'));
        displayRoom(numbers);
      }
    },
    false
  );
}
