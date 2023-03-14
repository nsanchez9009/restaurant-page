import {initPage} from "./initpage.js";
import {homePage, menuPage, contactPage} from "./pages.js";
import './style.css';

console.log("supre ");

const content = document.querySelector("#content");
const mainContainer = document.querySelector("#mainContainer");

initPage(content);

const homePageButton = document.querySelector("homeTab");
const menuPageButton = document.querySelector("menuTab");
const contactPageButton = document.querySelector("contactTab");

homePageButton.addEventListener("click", () => {
    homePage(mainContainer, homePageButton);
});

menuPageButton.addEventListener("click", () => {
    menuPage(mainContainer, menuPageButton);
});

contactPageButton.addEventListener("click", () => {
    contactPage(mainContainer, contactPageButton);
});
