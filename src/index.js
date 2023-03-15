import { initPage } from "./initpage.js";
import { pageMaker } from "./pages.js";
import './style.css';

import homeImage from './media/home.jpg';
import menuImage from './media/menu.jpg';
import contactImage from './media/contact.jpg';

console.log("supre ");

const content = document.querySelector("#content");

initPage(content);

const title = document.querySelector("#title");
const img = document.querySelector("#img");
const body = document.querySelector("#body");
const homePageButton = document.querySelector("#homeTab");
const menuPageButton = document.querySelector("#menuTab");
const contactPageButton = document.querySelector("#contactTab");

pageMaker(homePageButton, title, img, body,
    "☠ EVIL BURGER ☠",
    homeImage,
    '"Evil Burger is so scary, yet I keep coming back because the burgers are just THAT good." -NY Times Writer.'
);

homePageButton.addEventListener("click", () => {
    pageMaker(homePageButton, title, img, body,
        "☠ EVIL BURGER ☠",
        homeImage,
        '"Evil Burger is so scary, yet I keep coming back because the burgers are just THAT good." -NY Times Writer.'
    );
});

menuPageButton.addEventListener("click", () => {
    pageMaker(menuPageButton, title, img, body,
        "☠ MENU ☠",
        menuImage,
        "Burger (with or without cheese)."
    );
});

contactPageButton.addEventListener("click", () => {
    pageMaker(contactPageButton, title, img, body, 
        "☠ CONTACT ☠",
        contactImage,
        "(123)-456-7599, we will not answer."
    );
});