// Typing animation
new Typed("#typed-text", {
  strings: ["4th-Year CSE Student", "Web Developer", "ML Enthusiast", "Docker + NLP Engineer"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Smooth scroll navigation
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-to-top button
const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
