const btn = document.getElementById('btn');
const inputEl = document.getElementById('inputEl');
const outputEl = document.getElementById('output');

btn.addEventListener('click', () => {
  const year = Number(inputEl.value);
  
  
  inputEl.classList.remove('green', 'red');
  outputEl.classList.remove('green', 'red');

  if (!year) {
    outputEl.textContent = 'Будь ласка, введіть рік.';
    outputEl.classList.add('red');
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    inputEl.classList.add('green');
    outputEl.classList.add('green');
    outputEl.textContent = 'Ви народилися у високосний рік!';
    console.log('Високосний рік');
  } else {
    inputEl.classList.add('red');
    outputEl.classList.add('red');
    outputEl.textContent = 'Ви народилися у звичайний рік!';
    console.log('Звичайний рік');
  }
});