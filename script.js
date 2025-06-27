document.addEventListener('DOMContentLoaded', function() {

    // Header scroll hide/show functionality
    const header = document.querySelector('header'); 
    let lastScrollY = window.scrollY; 
    const scrollThreshold = 50; 

    if (header) {
        window.addEventListener('scroll', () => {
           
            if (window.scrollY > header.offsetHeight + scrollThreshold) {
                if (window.scrollY < lastScrollY) {
                    header.classList.remove('header-hidden');
                } else {
                    header.classList.add('header-hidden');
                }
            } else {
                header.classList.remove('header-hidden');
            }
            // Update the last scroll position for the next scroll event
            lastScrollY = window.scrollY;
        });
    } else {
        console.error('Error: Header element not found for smart scroll logic.');
    }
   // Burger Menu Functionality
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.nav-links-mobile');
const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a');

if (burger && mobileNav) {
    // Toggle mobile menu visibility and burger icon animation
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        mobileNav.classList.toggle('active'); // This toggles `transform` and `opacity/visibility` in CSS
    });

    // Close mobile menu when clicking on a navigation link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            burger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // Close mobile menu when clicking anywhere outside the menu/burger
    document.addEventListener('click', function (e) {
        if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
            burger.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
} else {
    console.error('Error: Burger menu elements not found.');
}

});


