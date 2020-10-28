import './styles.css';
import menu from './menu.json';
import menuTemplates from './templates/menuCard.hbs'

const menuContainer = document.querySelector('.js-menu');
const themeSwitcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

body.classList.add('light-theme');

themeSwitcher.addEventListener('click', toChageTheme)

function toChageTheme() { 
    if (themeSwitcher.checked == false) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else { 
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    localStorage.setItem('theme-switcher-position', body.classList.value);
    console.log(localStorage.getItem('theme-switcher-position'));
};

if (localStorage.getItem('theme-switcher-position') === "dark-theme") {
    themeSwitcher.checked = true;
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
} else { 
    console.log("светлая тема");
}

const menuMarkup = menuTemplates(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);



