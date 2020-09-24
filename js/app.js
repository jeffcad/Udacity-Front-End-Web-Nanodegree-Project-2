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

let activeSection = document.querySelector('.active-section');
let activeNav = document.querySelector('.active-nav');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function makeNavButton(section) {
    const newNavButton = document.createElement('li');
    newNavButton.classList.add('menu__link');
    newNavButton.textContent = section.dataset.nav;
    newNavButton.setAttribute('data-id', section.id);
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

function onNavClick(event) {
    const section = document.querySelector(`#${event.target.dataset.id}`);
    section.scrollIntoView({behavior: 'smooth'});
    setActiveNav(event.target);
    setActiveSection(section);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu() {
    const navBar = document.querySelector('#navbar__list');
    const sections = document.querySelectorAll('section');
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const newNavButton = makeNavButton(section);
        fragment.appendChild(newNavButton);
    }
    navBar.appendChild(fragment);
    navBar.addEventListener('click', onNavClick);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNavMenu();


// Scroll to section on link click

// Set sections as active


