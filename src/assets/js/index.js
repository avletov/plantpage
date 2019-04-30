import {d} from "./summary";

//Меню
const header = document.getElementById('header');
const menuButton = document.getElementById('menuButton');
const headerLogo = document.getElementById('headerLogo');
const menuList = document.getElementById('menuList');

menuButton.addEventListener('click', menuOpen);

function menuOpen() {
    header.style.height = 'auto';
    menuList.style.display = "flex";
    menuButton.removeEventListener('click', menuOpen);
    menuButton.addEventListener('click', menuClose);
}

function menuClose() {
    header.style.height = '70px';
    menuList.style.display = "none";
    menuButton.removeEventListener('click', menuClose);
    menuButton.addEventListener('click', menuOpen);
}





//Описание растения
const photoLink = document.getElementById('photo');
const cardLink = document.getElementById('card');
const substancesLink = document.getElementById('substances');

const photo = document.getElementById('photo-wrapper');
const card = document.getElementById('container-card');
const substances = document.getElementById('container-substanses');

photoLink.addEventListener('click', photoSelect);
cardLink.addEventListener('click', cardSelect);
substancesLink.addEventListener('click', substancesSelect);

function photoSelect() {
    photo.style.display = "block";
    card.style.display = "none";
    substances.style.display = "none";
}

function cardSelect() {
    photo.style.display = "none";
    card.style.display = "block";
    substances.style.display = "none";
}

function substancesSelect() {
    photo.style.display = "none";
    card.style.display = "none";
    substances.style.display = "block";
}


//Слайдер

//Открыть и закрыть
const photoMint = document.getElementById('photoGallery');
const photoSlider = document.getElementById('photoSlider');
photoMint.addEventListener('click', openSlider);

function openSlider(event) {
    if (event.target.id == 'close' || event.target.id == 'close-n') {
        return;
    }
    photoSlider.style.display = "flex";
}

function closeSlider() {
    photoSlider.style.display = "none";
}


//Навигация по фотографиям
const locations = new Array("/assets/img/mint_1.png","/assets/img/mint_2.png","/assets/img/mint_3.png","/assets/img/mint_4.png" );
let currentImage = 0;

const next = document.getElementById('next');
const back = document.getElementById('back');
const close = document.getElementById('close');

next.addEventListener('click', nextImage);
back.addEventListener('click', prevImage);
close.addEventListener('click', closeSlider);

function nextImage() {
    currentImage++;
    if (currentImage == locations.length) 
        currentImage = 0;                
    document.images["picture"].src = locations[currentImage];
    return false;
}

function prevImage() {
    currentImage--;
    if (currentImage == -1) 
        currentImage = locations.length - 1;                
    document.images["picture"].src = locations[currentImage];
    return false;
}


