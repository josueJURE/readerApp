const read = document.getElementById("read");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const speed = document.getElementById("speed");
const text = document.getElementById("text");


read.addEventListener("click", () => {
  readText(text.value)
});

pause.addEventListener("click", () => {
  pauseText();
});



var utterThis = new SpeechSynthesisUtterance();



function readText(text) {
  utterThis.text = text;
  utterThis.rate = speed.value || 1;
  text.disabled = true;
  speechSynthesis.speak(utterThis)
}

function pauseText() {
  speechSynthesis.pause();
}
