let letters = document.querySelectorAll("[id^='L']");

dropLetters(letters);

var infLoop = setInterval(() => {dropLetters(letters);}, 7500);

function dropLetters(letters) {
    var count = 0;
    var i = setInterval(() => {
        if (count == 96) {
            clearInterval(i);
        } else if ((count > 31) && (count < 48)) {
            translateDown(letters[count - 32], 10, 90, 500);
            ++count;
        } else if (count < 16) {
            translateDown(letters[count], -10, 10, 250);
            ++count;
        } else {
            ++count;
        }
    }, 100);
}

function translateDown(letter, from, to, duration) {
    var k = 0;
    var tl = setInterval(() => {
        if (k == (Math.abs(to - from))) {
            clearInterval(tl);
        } else {
            letter.style.top = (from + k) + "%";
            ++k;
        }
    }, duration/(Math.abs(to - from)))
}