/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
let activeSection = document.querySelector('.active-section');
let activeNav = document.querySelector('.active-nav');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function makeNavButton(section) {
    const newNavButton = document.createElement('li');
    newNavButton.classList.add('menu__link');
    newNavButton.textContent = section.dataset.nav;
    return newNavButton;
}

function setActiveNav(clickedNav) {
    if (activeNav !== clickedNav) {
        if (activeNav !== null) {
            activeNav.classList.remove('active-nav');
        }
        clickedNav.classList.add('active-nav')
        activeNav = clickedNav;
    }
}

function setActiveSection(section) {
    if (activeSection !== section) {
        activeSection.classList.remove('active-section');
        section.classList.add('active-section');
        activeSection = section;
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
// TODO: set listener only on parent element, use target delegation
for (const section of sections) {
    const newNavButton = makeNavButton(section);
    newNavButton.addEventListener('click', function() {
        section.scrollIntoView({behavior: 'smooth'});
        setActiveNav(newNavButton);
        setActiveSection(section);
    });
    fragment.appendChild(newNavButton);
}
navBar.appendChild(fragment);

// Scroll to section on link click

// Set sections as active


