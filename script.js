function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

/* ===== Animate products on scroll ===== */
const petCards = document.querySelectorAll('.pet-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.05 });


petCards.forEach(card => observer.observe(card));

/* ===== Close menu when clicking a link ===== */
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("show");
  });
});
