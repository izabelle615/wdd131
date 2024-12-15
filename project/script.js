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

    // array method and local storage
    const favoriteArtists = ['Elvis Presley', 'Louis Armstrong', 'Tupac Shakur'];

    // Save the favorite artists to local storage
    localStorage.setItem('favoriteArtists', JSON.stringify(favoriteArtists));

    // Retrieve the favorite artists from local storage
    const storedArtists = JSON.parse(localStorage.getItem('favoriteArtists'));

    //  array method to log the artists
    if (storedArtists && storedArtists.length > 0) {
        console.log("Favorite Artists:");
        storedArtists.forEach(artist => {
            console.log(artist);
        });
    }
});

// form submission that saves data in local storage
document.getElementById('artistForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission

    const artistName = document.getElementById('artistName').value;
    let savedArtists = JSON.parse(localStorage.getItem('favoriteArtists')) || [];
    savedArtists.push(artistName);
    localStorage.setItem('favoriteArtists', JSON.stringify(savedArtists));

    alert(`${artistName} added to favorites!`);
});
