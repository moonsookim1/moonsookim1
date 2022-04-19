const toggleButton =document.querySelector('.navbar__toggleButton');
const menu =document.querySelector('.navbar__menu');
const icons =document.querySelector('.navbar__icons');

toggleButton.addEventListener('click', () =>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
