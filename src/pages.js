

const pageMaker = function(tab, title, img, body, titleText, imgSrc, bodyText){
    console.log(tab);

    const selectedTab = document.querySelector(".selected");

    selectedTab.classList.remove("selected");

    title.textContent = titleText;
    img.src = imgSrc;
    body.textContent = bodyText;

    tab.classList.add('selected');
}

export {
    pageMaker,
}