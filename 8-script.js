// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Add click event listener
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
