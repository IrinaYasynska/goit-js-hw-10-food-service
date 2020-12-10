import './styles.css';


import onSwitchClick from './checked-theme'
import checkThem from './checked-theme'
import recipeCardDishes from './templates/templates.hbs';
import recipe from './menu.json';

const recipeContainer = document.querySelector('.js-menu');
const cardsMarkup = createColorCardsMarkup(recipe);

recipeContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

// recipeContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(recipe) {
    
    return recipeCardDishes(recipe);
}

