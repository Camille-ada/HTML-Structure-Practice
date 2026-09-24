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

// 3. Live input echo
const echoInput = document.querySelector('#echo-input');
const echoOutput = document.querySelector('#echo-output');

echoInput.addEventListener('input', () => {
    echoOutput.textContent = echoInput.value;
});

// 4. Dynamic list
const listInput = document.querySelector('#list-input');
const listAddBtn = document.querySelector('#list-add-btn');
const itemList = document.querySelector('#item-list');
 
function addListItem() {
  const text = listInput.value.trim();
  if (text === '') return;
 
  const li = document.createElement('li');
  li.textContent = text;
  itemList.appendChild(li);
 
  listInput.value = '';
  listInput.focus();
}
 
listAddBtn.addEventListener('click', addListItem);
 
// Also allow pressing Enter in the input to add the item
listInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addListItem();
  }
});
