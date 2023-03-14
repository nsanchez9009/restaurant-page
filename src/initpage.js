import bob from './media/bob.jpg';

const initPage = (content) => {
    const tabs = document.createElement('div');
    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    homeTab.textContent = "Home";
    homeTab.id = "homeTab";
    homeTab.classList.add("tab", "selected");
    tabs.appendChild(homeTab);

    menuTab.textContent = "Menu";
    homeTab.id = "menuTab";
    menuTab.classList.add("tab");
    tabs.appendChild(menuTab);

    contactTab.textContent = "Contact";
    homeTab.id = "contactTab";
    contactTab.classList.add("tab");
    tabs.appendChild(contactTab);

    tabs.id = "tabs";
    tabs.classList.add("text");

    content.appendChild(tabs);

    const backgroundImg = new Image();
    backgroundImg.src = bob;
    backgroundImg.id = "background";

    content.appendChild(backgroundImg);

    const mainContainer = document.createElement('div');
    mainContainer.id = "mainContainer";

    const title = document.createElement('div');
    title.id = "title";
    title.classList.add("text");
    mainContainer.appendChild(title);

    content.appendChild(mainContainer);
}

export {
    initPage,
}