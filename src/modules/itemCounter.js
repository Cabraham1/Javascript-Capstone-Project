const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
const itemCounter = document.querySelector('.item-counter');

const menuCounter = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const meal = data.meals;
  const count = meal.length;
  itemCounter.innerHTML = `(${count})`;
};

export default menuCounter;
menuCounter();
