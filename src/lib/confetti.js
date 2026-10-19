const COLORS = ['#7a0f1e', '#c2425a', '#fde8e4', '#ffffff'];

export function burstConfetti(event) {
  const origin = event.currentTarget.getBoundingClientRect();
  const originX = origin.left + origin.width / 2;
  const originY = origin.top;

  for (let i = 0; i < 10; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.background = COLORS[i % COLORS.length];
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.setProperty('--dx', `${(Math.random() - 0.5) * 160}px`);
    piece.style.setProperty('--dy', `${-(60 + Math.random() * 80)}px`);
    piece.style.setProperty('--rotate', `${Math.random() * 360}deg`);

    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}