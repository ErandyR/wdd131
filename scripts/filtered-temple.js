// hamburger menu 
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const h2 = document.querySelector("#h2");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamButton.classList.toggle("open");
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montreal Quebec Temple",
        location: "Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
    },
    {
        templeName: "Brasília Brazil Temple",
        location: "Brasília, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        templeName: "Freetown Sierra Leone Temple",
        location: "Freetown, Sierra Leone",
        dedicated: "2022, March, 19",
        area: 18000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/freetown-sierra-leone-temple/freetown-sierra-leone-temple-24087-main.jpg"
    }
];

function templeCard(temple) {
    return `<figure>
                <img class="temple-images" src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            </figure>`;
}

const templesContainer = document.querySelector("#temples-container");

function iterateTemples(temples) {
    templesContainer.innerHTML = "";
    temples.forEach(temple => {
        templesContainer.innerHTML += templeCard(temple);
    });
}

iterateTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    iterateTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    iterateTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));
});

document.querySelector("#new").addEventListener("click", () => {
    iterateTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    }));
});

document.querySelector("#large").addEventListener("click", () => {
    iterateTemples(temples.filter(temple => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    iterateTemples(temples.filter(temple => temple.area < 10000));
});