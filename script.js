const count = document.getElementById('count');
var countValue = 0;

function play() {
  const audio = new Audio('./assets/sounds/quack.mp3');
  audio.play();
  countValue++;
  count.innerHTML = countValue;
}

function reset() {
  const bop = new Audio('./assets/sounds/bop.mp3');
  bop.play();
  countValue = 0;
  count.innerHTML = countValue;
}