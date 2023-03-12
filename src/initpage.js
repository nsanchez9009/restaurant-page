import evilPicture from './media/evilBurger.jpg';

const initPage = () => {
    const headLine = document.createElement('div');
    headLine.id = "headLine";
    headLine.textContent = "Evil Burger!";

    const mainImage = document.createElement('div');
    mainImage.id = "mainImage";

    const mainImgSrc = new Image();
    mainImgSrc.src = evilPicture;

    mainImage.appendChild(mainImgSrc);

    const mainText = document.createElement('div');
    mainText.id = "mainText";
    mainText.textContent = "WOW IM SO AFRAID TO EAT AT EVIL BURGER BUT THE BURGERS ARE SO GOOD SO I KEEP COMING BACK!"

    const content = document.querySelector("#content");
    content.appendChild(headLine);
    content.appendChild(mainImage);
    content.appendChild(mainText);
}

export {
    initPage,
}