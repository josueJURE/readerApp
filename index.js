const read = document.getElementById("read");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const speed = document.getElementById("speed");
const text = document.getElementById("text")


read.addEventListener("click", function() {
  readText(text.value)
});

var utterThis = new SpeechSynthesisUtterance();

console.log(utterThis)
