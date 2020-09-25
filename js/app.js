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

// Tracks the active section to avoid iterating over entire list of sections
// and manipulating classes of all
let activeSection = document.querySelector('.active-section');

// Tracks the active nav button to avoid iterating over entire list of buttons
// and manipulating classes of all
let activeNav = document.querySelector('.active-nav');

// Tracks the last Y position of the window, so code can determine if user is
// scrolling up or down. Program will set ratio of screen coverage needed to // // determine active section based on the direction
let lastScrollY = 0;

// Holds the list of sections
const sections = document.querySelectorAll('section');

// Holds the button used to scroll to top
const goUpButton = document.querySelector('#go-up-button');


/**
 * Function definitions (in order of when they are called in code)
 * 
*/

// Assembles and appends the navigation bar, then calls to add the listeners
function initialSetup() {
    const navBar = document.querySelector('#navbar__list');
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const newNavButton = makeNavButton(section);
        fragment.appendChild(newNavButton);
    }
    navBar.appendChild(fragment);
    addListeners(navBar);
}

// Creates a new nav button with classes based on the section parameter, and
// returns a button
function makeNavButton(section) {
    const newNavButton = document.createElement('li');
    newNavButton.classList.add('menu__link');
    newNavButton.textContent = section.dataset.nav;
    newNavButton.setAttribute('data-id', section.id);
    newNavButton.id = `nav-${section.id}`;
    if (activeNav == null) {
        newNavButton.classList.add('active-nav')
        activeNav = newNavButton;
    }
    return newNavButton;
}

// Adds listeners to 3 places:
// 1. navigation bar to listen for clicks
// 2. document to listen for scroll
// 3. go-up-button to listen for click
// These are the only 3 listeners the code uses.
function addListeners(navBar) {
    navBar.addEventListener('click', onNavClick);
    document.addEventListener('scroll', function() {scrollCheck()});
    goUpButton.addEventListener('click', function() {window.scrollTo({top: 0, behavior: 'smooth'})});
}

// Smoothly scrolls to the appropriate section after click on navigation bar
function onNavClick(event) {
    const section = document.querySelector(`#${event.target.dataset.id}`);
    section.scrollIntoView({behavior: 'smooth'});
}

// Checks the position of page in the window. Controls visibility of the
// go-up-button. Checks if user is scrolling up or down, sets the screen
// coverage ratio accordingly. Uses this ratio to determine which section
// is active. If active section is different from previous active section
// in activeSection, then calls functions to set new active section and 
// navigation button.
function scrollCheck() {
    const viewportHeight = window.innerHeight;
    let ratioForActive;
    if (window.scrollY > 500) {
        goUpButton.classList.remove('hide');
    } else {
        goUpButton.classList.add('hide');
    }
    if (window.scrollY > lastScrollY) {
        ratioForActive = viewportHeight/3;
    } else {
        ratioForActive = viewportHeight*2/3;
    }
    lastScrollY = window.scrollY;
    for (const section of sections) {
        const position = section.getBoundingClientRect();
        if (position.top < ratioForActive && position.bottom > ratioForActive && section !== activeSection) {
            setActiveSection(section);
            setActiveNav(document.querySelector(`#nav-${section.id}`));
            break;
        }
    }
}

// Removes active-section class from previous active section, adds the class to 
// new active section.
function setActiveSection(section) {
    activeSection.classList.remove('active-section');
    section.classList.add('active-section');
    activeSection = section;
}

// Removes active-nav class from previous active navigation button, adds the 
// class to new active navigation button.
function setActiveNav(nav) {
    activeNav.classList.remove('active-nav');
    nav.classList.add('active-nav')
    activeNav = nav;
}


/**
 * Execute the program
 * 
*/

// Call the function to start the whole code
initialSetup();

