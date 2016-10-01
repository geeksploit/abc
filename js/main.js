var boxColor   = document.getElementById('color');
var boxGesture = document.getElementById('gesture');
var boxImage   = document.getElementById('image');
var boxLetter  = document.getElementById('letter');

function drawChildren(index) {
	boxColor.style.background = data[index].color;
	boxGesture.style.backgroundImage = 'url(img/' + index + '.gif)';
	boxLetter.innerHTML = data[index].letter;
	boxImage.style.opacity = 0;
        setTimeout(fadeIn, 1000, boxImage, 2000);
}

var index = getRandom(10);
drawChildren(index);

var btnBad  = document.getElementById('bad');
var btnDbg  = document.getElementById('debug');
var btnGood = document.getElementById('good');

btnDbg.addEventListener('click', function() {
  switch (this.style.opacity) {
    case '':
    case '0':
      fadeIn(this);
      break;
    case '1':
      fadeOut(this);
      break;
  }
});

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
