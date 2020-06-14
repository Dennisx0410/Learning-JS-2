let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let str = [
    1,
    2,
    3,
    'g'
];

const add = (num1, num2) => {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}
console.log('ADD: '+add(-1,4));
console.log('sub: '+subtract(-4,5));

// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {
//     alert('Pls stop clicking the html!');
// }

// myHTML.addEventListener('click', evt => {
//     alert('Pls stop clicking the header!');
// })


let myImage = document.querySelector('img');

myImage.addEventListener('click', evt => {
    let mySrc = myImage.getAttribute('src');
    let pic1 = 'images/chaeYena.png';
    let pic2 = 'images/minjuYena.png';
    if (mySrc === pic1) {
        myImage.setAttribute('src',pic2);
    }
    else {
        myImage.setAttribute('src',pic1);
    }
})

let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Hello ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}