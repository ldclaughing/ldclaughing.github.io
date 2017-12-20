var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/CPLogo.png') {
        myImage.setAttribute('src', 'images/test.jpg');
    } else {
        myImage.setAttribute('src', 'images/CPLogo.png');
    }
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUsername() {
    var myName = prompt('请输入你的名字')
    localStorage.setItem('name', myName)
    myHeading.innerHTML = 'CP GROUP IS COOL, ' + myName
}

if (!localStorage.getItem('name')) {
    setUsername
} else {
    var storedName = localStorage.getItem('name')
    myHeading.innerHTML = 'CP GROUP IS COOL, ' + storedName
}

myButton.onclick = function() {
    setUsername()
}