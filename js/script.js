const phrases = [
  "Stay Safe in the Online Jungle",
  "Protect Your Digital Life",
  "Learn. Defend. Thrive.",
];

const typingElement = document.getElementById("hero-title");

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let delay = 120;

function type() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
    typingElement.textContent = phrase.substring(0, currentChar);
    if (currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, delay / 2);
    }
  } else {
    currentChar++;
    typingElement.textContent = phrase.substring(0, currentChar);
    if (currentChar === phrase.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, delay);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});


// Responsive navbar toggle with animation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', function () {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('hidden');
  navToggle.classList.toggle('open');
});

// Close menu on link click (mobile)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', false);
      navToggle.classList.remove('open');
    }
  });
});