import './index.html';
import './style.css';
import display from './modules/displayList.js';
import menuCounter from './modules/itemCounter.js';
import { likes, displayLikes } from './modules/likesCounter.js';

display();
likes();
displayLikes();
menuCounter();