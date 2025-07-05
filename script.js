const typingElement = document.getElementById("typing");
const texts = ["Data Scientist", "Python Enthusiast", "App Developer"];
let index = 0, charIndex = 0, currentText = "";

function type() {
  if (charIndex < texts[index].length) {
    currentText += texts[index][charIndex++];
    typingElement.innerText = currentText;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = currentText.slice(0, --charIndex);
    typingElement.innerText = currentText;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();
