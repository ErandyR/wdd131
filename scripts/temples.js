const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

let oLastModif = new Date(document.lastModified);

const lastMod = document.querySelector("#lastModified");

lastMod.innerHTML = oLastModif;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const h2 = document.querySelector("#h2");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamButton.classList.toggle("open");
});