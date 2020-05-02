let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mozillaicon.png'){
		myImage.setAttribute('src','images/picture2.webp');
		myHeading.textContent = 'Hello World!';
	}
	else{
		myImage.setAttribute('src','images/mozillaicon.png');
		myHeading.textContent = 'Mozilla Firefox';
	}

}

let myButton = document.querySelector('button');

function setUserName(){
	let myName = prompt('Please enter your name:');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, '+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is fun, '+storedName;
}

myButton.onclick = function(){
	setUserName();
}