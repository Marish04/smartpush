const dropdown = document.querySelector('.dropdown');
const dropdownUl = document.querySelector('.dropdown-ul');
const burger = document.querySelector('.burger');
const navUl =document.querySelector('.nav-ul')


dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('open');
    dropdownUl.classList.toggle('open');
})

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navUl.classList.toggle('open')
})


