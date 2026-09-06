
// html { scroll-behavior: smooth } already handles smooth scrolling —
// JS fallback removed to avoid double handling; keeping native anchor behavior
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function () {
    // let CSS smooth scroll do the work; JS only for reveal, no preventDefault needed
  });
});



// mobile menu — .nav-toggle opens the panel styled by `nav.open ul`
const navEl = document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");

if (navEl && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navEl.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navEl.querySelectorAll("#primary-nav a").forEach(link => {
    link.addEventListener("click", () => {
      navEl.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});