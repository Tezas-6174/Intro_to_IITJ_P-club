let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'scripts/images/i.jpg') {
      myImage.setAttribute('src','scripts/images/j.png');
    } else {
      myImage.setAttribute('src','scripts/images/i.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to my first repository , ${myName}`;
  }
}

myButton.onclick = function() {
  setUserName();
}
