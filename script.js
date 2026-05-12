// Pequeno aprimoramento visual sem depender de bibliotecas externas.
const revealElements = document.querySelectorAll(
  ".hero__content, .hero__media, .service-card, .result-card, .contact__content, .map-card, .final-cta__box"
);

revealElements.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

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
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealElements.forEach((element) => observer.observe(element));
