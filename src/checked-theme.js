const bodyTheme = document.querySelector('body');
const switchThemeBtn = document.querySelector('#theme-switch-toggle');
switchThemeBtn.addEventListener('change', onSwitchClick);


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

export function onSwitchClick(evt) {
    if (evt.target.checked) {
        bodyTheme.classList.add(Theme.DARK);
        bodyTheme.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark');
    }
    else {
        bodyTheme.classList.add(Theme.LIGHT);
        bodyTheme.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light');
    }

}

document.addEventListener('DOMContentLoaded', checkThem)

export function checkThem() {
    if (localStorage.getItem('theme') === 'dark') {
        bodyTheme.classList.add(Theme.DARK)
        switchThemeBtn.checked = true
    }
    else {
        bodyTheme.classList.add(Theme.LIGHT)
        switchThemeBtn.checked = false
    }
} 