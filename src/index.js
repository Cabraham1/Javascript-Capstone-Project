import './index.html';
import './style.css';
import display from './modules/displayList.js';
import Meal from './modules/meal-Class.js';
import menuCounter from './modules/itemCounter.js';
import { likes, displayLikes } from './modules/likesCounter.js';
import './assets/close.svg';

display();
likes();
displayLikes();
menuCounter();
const niceMeal = new Meal();
niceMeal.getMeal();