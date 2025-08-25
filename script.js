// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Progress bar animation
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const skillValue = bar.getAttribute("data-skill");
    setTimeout(() => {
      bar.style.width = skillValue + "%";
    }, 500); // delay for smooth effect
  });
});


