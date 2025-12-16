// Select the navbar element
const navbar = document.querySelector('.nav-content');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // If we scroll down more than 50 pixels...
    if (window.scrollY > 30) {
        // Add the 'scrolled' class (Make it dark)
        navbar.classList.add('scrolled');
    } else {
        // If we are at the top, remove the class (Make it transparent)
        navbar.classList.remove('scrolled');
    }
});


// --- TYPEWRITER EFFECT --- //
const textToType = "Francis Asogbalaji. "; // The text you want to type
const typeSpeed = 70;  // How fast it types (ms)
const deleteSpeed = 50; // How fast it deletes (ms)
const pauseTime = 2000; // How long it waits after typing before deleting

const typeWriterElement = document.querySelector('.typewriter');
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textToType;

    if (isDeleting) {
        // Deleting characters
        typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing characters
        typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    // LOGIC: Determine what to do next
    let typeSpeedCurrent = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentText.length) {
        // Finished typing -> PAUSE then switch to deleting
        typeSpeedCurrent = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting -> Switch back to typing
        isDeleting = false;
        typeSpeedCurrent = 500; // Short pause before starting again
    }

    setTimeout(typeEffect, typeSpeedCurrent);
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', typeEffect);



/* script.js */

/* 2. MOBILE MENU LOGIC */
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const icon = document.querySelector(".hamburger");
    
    menu.classList.toggle("active");
    icon.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".nav-links");
        const icon = document.querySelector(".hamburger");
        
        menu.classList.remove("active");
        icon.classList.remove("active");
    });
});

/* 3. NAVBAR SCROLL EFFECT (Optional Polish) */
// This makes the navbar darker when you scroll down
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".nav-content");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});