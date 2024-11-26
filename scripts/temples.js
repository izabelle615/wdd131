document.addEventListener('DOMContentLoaded', function() {
    // Display current year dynamically
    const yearSpan = document.getElementById('currentyear');
    yearSpan.textContent = new Date().getFullYear();

    // Display last modified date dynamically
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;

    // Hamburger menu toggle functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        const isExpanded = navMenu.getAttribute('aria-hidden') === 'true';
        
        // Toggle menu visibility and the aria-expanded state
        navMenu.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
        hamburger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        
        // Toggle the hamburger button to an 'X' on click
        hamburger.textContent = isExpanded ? '×' : '☰'; // Change symbol
        
        // Toggle the 'show' class to display the menu
        navMenu.classList.toggle('show');
    });
});
