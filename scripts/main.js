// Image switcher
let myImage = document.querySelector('img');
myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chika-transparent.webp') {
    myImage.setAttribute('src', 'images/chika-embarassed.png');
  } else {
    myImage.setAttribute('src', 'images/chika-transparent.webp');
  }
}

// Custom greeting
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myGreeting = 'Welcome to my first website (from scratch), ';

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myGreeting + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = myGreeting + storedName;
}

myButton.onclick = () => setUserName();
