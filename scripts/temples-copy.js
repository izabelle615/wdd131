// Array of Temple Objects
const temples = [
    {
        name: "St. George Utah Temple",
        location: "St. George, Utah",
        dedicationDate: "6–8 April 1877",
        area: 24000,
        image: "https://example.com/temple1.jpg",
        alt: "St. George Utah Temple with its iconic spires against the blue sky"
    },
    {
        name: "Logan Utah Temple",
        location: "Logan, Utah",
        dedicationDate: "17–19 May 1884",
        area: 21000,
        image: "https://example.com/temple2.jpg",
        alt: "Logan Utah Temple against a scenic backdrop"
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicationDate: "17 May 1888",
        area: 22000,
        image: "https://example.com/temple3.jpg",
        alt: "Manti Utah Temple with grand architecture"
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicationDate: "6–24 April 1893",
        area: 100000,
        image: "https://example.com/temple4.jpg",
        alt: "Salt Lake Temple with its intricate details and spires"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicationDate: "27–30 November 1919",
        area: 28000,
        image: "https://example.com/temple5.jpg",
        alt: "Laie Hawaii Temple on a lush tropical island"
    },
    {
        name: "Cardston Alberta Temple",
        location: "Cardston, Alberta",
        dedicationDate: "26–29 August 1923",
        area: 21000,
        image: "https://example.com/temple6.jpg",
        alt: "Cardston Alberta Temple with a historical design"
    },
    {
        name: "Mesa Arizona Temple",
        location: "Mesa, Arizona",
        dedicationDate: "23–26 October 1927",
        area: 35000,
        image: "https://example.com/temple7.jpg",
        alt: "Mesa Arizona Temple with distinctive Southwestern architecture"
    },
    {
        name: "Idaho Falls Idaho Temple",
        location: "Idaho Falls, Idaho",
        dedicationDate: "23–25 September 1945",
        area: 32000,
        image: "https://example.com/temple8.jpg",
        alt: "Idaho Falls Idaho Temple surrounded by scenic landscapes"
    },
    {
        name: "Bern Switzerland Temple",
        location: "Bern, Switzerland",
        dedicationDate: "6 November 1955",
        area: 24000,
        image: "https://example.com/temple9.jpg",
        alt: "Bern Switzerland Temple in a scenic European setting"
    },
    // Additional temples
    {
        name: "New York Temple",
        location: "New York, USA",
        dedicationDate: "3 November 2004",
        area: 180000,
        image: "https://example.com/temple10.jpg",
        alt: "New York Temple with modern architecture"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicationDate: "23 February 1980",
        area: 35000,
        image: "https://example.com/temple11.jpg",
        alt: "Tokyo Japan Temple with a beautiful modern design"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicationDate: "13 May 2017",
        area: 36000,
        image: "https://example.com/temple12.jpg",
        alt: "Paris France Temple with elegant design"
    }
];

// Filter Functions
const filterTemples = (criteria) => {
    let filteredTemples = [];

    switch(criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicationDate.split(' ')[2], 10);
                return year < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicationDate.split(' ')[2], 10);
                return year > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }

    return filteredTemples;
};

// Render Temple Cards
const renderTempleCards = (temples) => {
    const templeGallery = document.getElementById('temple-gallery');
    templeGallery.innerHTML = '';

    temples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
            <img src="${temple.image}" alt="${temple.alt}" loading="lazy">
            <h3>${temple.name}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicationDate}</p>
            <p>Area: ${temple.area.toLocaleString()} sq. ft.</p>
        `;

        templeGallery.appendChild(templeCard);
    });
};

// Navigation
document.getElementById('home').addEventListener('click', () => {
    renderTempleCards(filterTemples('home'));
});
document.getElementById('old').addEventListener('click', () => {
    renderTempleCards(filterTemples('old'));
});
document.getElementById('new').addEventListener('click', () => {
    renderTempleCards(filterTemples('new'));
});
document.getElementById('large').addEventListener('click', () => {
    renderTempleCards(filterTemples('large'));
});
document.getElementById('small').addEventListener('click', () => {
    renderTempleCards(filterTemples('small'));
});

// Set Footer Date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
