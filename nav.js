const listMenu = document.querySelector('.hamburger-menu');
const listItems = document.querySelector('.item-lists');

listMenu.addEventListener('click', () => {
    listItems.classList.toggle("change");
    listMenu.classList.toggle("change");
})