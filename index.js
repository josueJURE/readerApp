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


function readText(dummy) {
  var utterThis = new SpeechSynthesisUtterance(dummy);
  if(speechSynthesis.speaking && speechSynthesis.paused) {
    return speechSynthesis.resume()
  }

  if(speechSynthesis.speaking) return;

  console.log(utterThis)
  console.log(speechSynthesis)


  utterThis.text = dummy;
  utterThis.rate = speed.value
  text.disabled = true;
  speechSynthesis.speak(utterThis)
  utterThis.addEventListener("end", () => {
    text.disabled = false
  })
}

function pauseText() {
  if(speechSynthesis.speaking)  speechSynthesis.pause();
}
