// Crear corazones flotantes
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
  heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Crear corazones cada 2 segundos
setInterval(createFloatingHeart, 2000);

// Funcionalidad del sobre
const envelope = document.getElementById('envelope');
const letter   = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');

envelope.addEventListener('click', () => {
  envelope.classList.add('opened');
  setTimeout(() => {
    envelope.style.display = 'none';
    letter.classList.add('show');
  }, 1000);
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  letter.classList.remove('show');
  setTimeout(() => {
    envelope.style.display = 'block';
    envelope.classList.remove('opened');
  }, 500);
});

// Corazones iniciales
for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingHeart, i * 1000);
}
