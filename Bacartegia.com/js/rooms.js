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
  console.log(x);
  document.getElementById('office-name').innerHTML = officeInfo[x].name;
  document.getElementById('description').innerHTML = officeInfo[x].description;
  document.getElementById('photo').src = officeInfo[x].photo;
  document.getElementById('price').innerHTML = officeInfo[x].price;
}
