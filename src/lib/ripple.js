export function createRipple(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - radius}px`;
  ripple.style.top = `${event.clientY - rect.top - radius}px`;

  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}