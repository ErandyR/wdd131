// hamburger menu 
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const h2 = document.querySelector("#h2");
const logoHomePage = document.querySelector("#logoHomepage")

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamButton.classList.toggle("open");
    logoHomePage.classList.toggle("unactive")
});

const conveyors = [
    {
        name: "Roller Conveyors",
        description: "Efficient for moving boxes, totes, and pallets with minimal power usage. Ideal for warehouses and distribution centers.",
        image: "images/carousel-image6.webp",
        alt: "Roller Conveyor System"
    },
    {
        name: "Flat Belt Conveyors",
        description: "Versatile solution for transporting items of various sizes and shapes. Perfect for packaging and assembly lines.",
        image: "images/carousel-image4.webp",
        alt: "Flat Belt Conveyor"
    },
    {
        name: "Modular Plastic Belt Conveyors",
        description: "Durable and easy to clean, designed for food processing and sanitary applications.",
        image: "images/carousel-image1.webp",
        alt: "Modular Plastic Belt Conveyor"
    },
    {
        name: "Inclined/Declined Conveyors",
        description: "Move products between different heights with ease, saving floor space and improving workflow.",
        image: "images/carousel-image3.webp",
        alt: "Inclined Conveyor Belt"
    },
    {
        name: "Chain Conveyors",
        description: "Heavy-duty system for transporting bulky, hot, or abrasive materials in manufacturing environments.",
        image: "images/carousel-image1.webp",
        alt: "Chain Conveyor System"
    },
    {
        name: "Custom Automation Solutions",
        description: "Tailored conveyor systems designed to fit your unique production requirements and maximize efficiency.",
        image: "images/carousel-image2.webp",
        alt: "Custom Automation Conveyor System"
    }
]

// creating cards dynamically

let currentIndex = 0;

function loadCarousel(startIndex) {
    const container = document.getElementById("carousel-items");
    container.innerHTML = "";
    for (let i = startIndex; i < startIndex + 3 && i < conveyors.length; i++) {
        const item = conveyors[i];
        container.innerHTML +=
            `<figure>
                <img class="conveyor-images" src="${item.image}" alt="${item.alt}" loading="lazy">
                <figcaption>
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p class="more-button"><a href="services.html">Learn more</a></p>
                </figcaption>
            </figure>`;
    }
}


// slides
document.querySelector(".prev").addEventListener("click", () => {
    currentIndex -= 3;
    if (currentIndex < 0) currentIndex = conveyors.length - 3;
    loadCarousel(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex += 3;
    if (currentIndex >= conveyors.length) currentIndex = 0;
    loadCarousel(currentIndex);
});


loadCarousel(currentIndex);


// saving the form info into localStorage
const form = document.querySelector('#contactUs form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


window.addEventListener('load', () => {
    if (localStorage.getItem('contactForm')) {
        const data = JSON.parse(localStorage.getItem('contactForm'));
        nameInput.value = data.name;
        emailInput.value = data.email;
    }
});

form.addEventListener('input', () => {
    const formData = {
        name: nameInput.value,
        email: emailInput.value
    };
    localStorage.setItem('contactForm', JSON.stringify(formData));
    console.log(formData);
});

