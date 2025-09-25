import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function clearContent() {
    document.querySelector('#content').innerHTML = '';
}

function addEventListeners() {
    document.querySelector('#homeBtn').addEventListener('click', () => {
        clearContent();
        loadHome();
    });
    document.querySelector('#menuBtn').addEventListener('click', () => {
        clearContent();
        loadMenu();
    });
    document.querySelector('#contactBtn').addEventListener('click', () => {
        clearContent();
        loadContact();
    });
}

function initializeWebsite() {
    loadHome();
    addEventListeners();

}

initializeWebsite();