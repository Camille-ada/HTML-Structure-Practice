// 1. click counter

const counterBtn = document.querySelector('#counter-btn');
const counterValue = document.querySelector('#counter-value');
 
let count = 0;
 
counterBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

// 2. toggle test
const toggleBtn = document.querySelector('#toggle-btn');
const toggleValue = document.querySelector('#toggle-text');

toggleBtn.addEventListener('click', () => {
    toggleValue.classList.toggle('hidden');
});