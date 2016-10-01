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