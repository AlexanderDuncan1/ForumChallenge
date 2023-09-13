let timeout;

function startTimer() {
  timeout = setTimeout(doInactive, 600000);
}

function resetTimer() {
  clearTimeout(timeout);
  startTimer();
}

function doInactive() {
  fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then(() => document.location.replace('/'));
}

window.onload = startTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onscroll = resetTimer;
window.onkeypress = resetTimer;