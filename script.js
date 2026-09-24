// 1. click counter
const counterBtn = document.querySelector('#counter-btn');
const counterValue = document.querySelector('#counter-value');
 
let count = 0;
 
counterBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

