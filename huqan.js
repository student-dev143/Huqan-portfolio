
// html { scroll-behavior: smooth } already handles smooth scrolling —
// JS fallback removed to avoid double handling; keeping native anchor behavior
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function () {
    // let CSS smooth scroll do the work; JS only for reveal, no preventDefault needed
  });
});



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