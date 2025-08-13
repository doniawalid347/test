function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playSound(e) {
  playSoundByKeyCode(e.keyCode);
}

function playSoundOnClick(e) {
  const keyCode = e.currentTarget.getAttribute('data-key');
  playSoundByKeyCode(keyCode);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSoundOnClick); // تشغيل بالماوس
});

window.addEventListener('keydown', playSound); // تشغيل بالكيبورد
