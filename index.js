const bar = document.querySelector('.fa-bars');
const display = document.querySelector('header nav ul')

bar.addEventListener('click', () => {
    display.classList.toggle('toggle-bar')
})