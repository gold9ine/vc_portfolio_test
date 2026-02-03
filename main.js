// Smooth scroll for nav links
document.querySelectorAll('.main-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Reveal on scroll for project cards
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all
  revealElements.forEach((el) => el.classList.add("is-visible"));
}
