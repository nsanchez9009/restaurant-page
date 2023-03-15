import bob from './media/bob.jpg';

const initPage = (content) => {
    // Create tabs.
    const tabs = document.createElement('div');
    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    // Tabs container.
    tabs.id = "tabs";
    tabs.classList.add("text");
    content.appendChild(tabs);
    
    // Home tab.
    homeTab.textContent = "Home";
    homeTab.id = "homeTab";
    homeTab.classList.add("tab", "selected");
    tabs.appendChild(homeTab);

    //Menu tab.
    menuTab.textContent = "Menu";
    menuTab.id = "menuTab";
    menuTab.classList.add("tab");
    tabs.appendChild(menuTab);

    // Contact tab.
    contactTab.textContent = "Contact";
    contactTab.id = "contactTab";
    contactTab.classList.add("tab");
    tabs.appendChild(contactTab);

    // Background img.
    const backgroundImg = new Image();
    backgroundImg.src = bob;
    backgroundImg.id = "background";
    content.appendChild(backgroundImg);

    // Main container.
    const mainContainer = document.createElement('div');
    mainContainer.id = "mainContainer";
    
    // Title.
    const title = document.createElement('div');
    title.id = "title";
    title.classList.add("text");
    title.textContent = "title";
    mainContainer.appendChild(title);

    // Img.
    const img = new Image();
    img.id = "img";
    mainContainer.appendChild(img);

    // Body.
    const body = document.createElement('div');
    body.id = "body";
    body.classList.add("text");
    title.textContent = "text";
    mainContainer.appendChild(body);

    content.appendChild(mainContainer);
}

export {
    initPage,
}