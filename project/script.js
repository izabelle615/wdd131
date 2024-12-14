
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}


document.getElementById('hamburger').addEventListener('click', toggleMenu);


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
  
    if (window.innerWidth <= 768) {
        navbar.classList.remove('show');
    }

  
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');  
        }
    });
});
