var boxColor  = document.getElementById("color");
var boxLetter = document.getElementById("letter");
var boxImage  = document.getElementById("image");

function drawChildren(index) {
	boxColor.style.background = data[index].color;
	boxLetter.innerHTML = data[index].letter;
	boxImage.style.backgroundImage = 'url(img/' + index + '.gif)';
}

var index = getRandom(10);
drawChildren(index);

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days*24*60*60*1000);
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		c = c.trim();
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

var btnBad = document.getElementById("bad");
var btnGood = document.getElementById("good");

btnBad.addEventListener('click', onClick);
btnGood.addEventListener('click', onClick);

function onClick() {
	var id = this.id;
	switch (id) {
		case 'bad':
			setup[index] = setup[index] < 9 ? setup[index] + 1 : 9;
			break;
		case 'good':
			setup[index] = setup[index] > 1 ? setup[index] - 1 : 1;
			break;
	}

	var lastIndex = index;
	do {
		index = getRandom(10);
	} while (setup[index] < getRandom(10) || index === lastIndex)
	  
	drawChildren(index);
	document.getElementById('debug').innerHTML = '[' + setup + ']';
}

function getRandom(max) {
	return Math.floor(1 + Math.random() * max);
}