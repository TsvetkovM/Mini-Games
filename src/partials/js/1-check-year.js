//  body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       margin-top: 100px;
//     }
//     input[type="number"] {
//       padding: 10px;
//       border: 2px solid #ccc;
//       border-radius: 20px 0 0 20px;
//       width: 200px;
//       font-size: 16px;
//       outline: none;
//     }
//     button {
//       padding: 10px 15px;
//       border: none;
//       background-color: black;
//       color: white;
//       border-radius: 0 20px 20px 0;
//       cursor: pointer;
//       font-size: 16px;
//     }
//     #output {
//       margin-top: 20px;
//       font-size: 18px;
//       font-weight: bold;
//     }
//     .green {
//       color: green;
//     }
//     .red {
//       color: red;
//     }





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
