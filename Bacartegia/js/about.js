const menuToggle = document.querySelector('.header__menu--toggle');
let toggleNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  toggleNav.classList.toggle('active')
})


// // RETRIEVE DATA FROM JSON FILE

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'json/data.json', true);
// xhr.responseType = 'text';
// xhr.send();

// xhr.onload = function() {
//   if (xhr.status === 200) {
//     var myStuff = JSON.parse(xhr.responseText);
//     console.log(myStuff);
//     var showText = '';
//     var message = document.getElementById('message');

//     for (var i = 0; i < myStuff.length; i++) {
//       showText +=
//         '<br> ' +
//         myStuff[i].name +
//         ' is a ' +
//         myStuff[i].language +
//         ' programmer. ' +
//         myStuff[i].photo;
//     }
//     message.innerHTML = showText;
//   }
// };
