function fadeIn(element, time) {
  step = 50;  // lower - smoother
  time = time ? time : 1000;  // if no time specified, set it to 1000 ms
  opacity = element.style.opacity ? parseFloat(element.style.opacity) : 0;
  if (opacity < 1) {
    element.style.opacity = opacity + step / time;
    setTimeout(fadeIn, step, element, time);  // go deeper into recursion
  } else {
    element.style.opacity = 1;
    return;  // the last recursion level
  }
}

function fadeOut(element, time) {
  step = 50;  // lower - smoother
  time = time ? time : 1000;  // if no time specified, set it to 1000 ms
  opacity = element.style.opacity ? parseFloat(element.style.opacity) : 1;
  if (opacity > 0) {
  element.style.opacity = opacity - step / time;
    setTimeout(fadeOut, step, element);
  } else {
    element.style.opacity = 0;
    return;
  }
}

function cookieWrite(name, value, days) {
  // value = '' effectively deletes a given cookie
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();
  } else {
    var expires = '';
  }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function cookieRead(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		c = c.trim();
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
