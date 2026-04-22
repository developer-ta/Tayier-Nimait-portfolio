const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const cards = document.querySelectorAll('.reveal');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 80}ms`;
  });
}
