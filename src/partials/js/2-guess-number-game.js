
document.addEventListener("DOMContentLoaded", () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    document.body.insertAdjacentHTML("beforeend", `
        <div id="game-container">
            <h1>Вгадай число від 1 до 10</h1>
            <input type="number" id="userInput" min="1" max="10">
            <button id="checkButton">Перевірити</button>
            <p id="result"></p>
        </div>
    `);

    const checkButton = document.querySelector("#checkButton");
    const resultElement = document.querySelector("#result");
    const userInput = document.querySelector("#userInput");

    checkButton.addEventListener("click", () => {
        let userNumber = parseInt(userInput.value);
        let resultMessage = "";

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
            resultMessage = "Будь ласка, введіть число від 1 до 10.";
        } else if (userNumber === randomNumber) {
            resultMessage = `Вітаю, ви вгадали число! (${randomNumber})`;
            resultElement.classList.add("success");
        } else {
            resultMessage = "Неправильно! Спробуй ще раз";
            resultElement.classList.add("failure");
        }

        resultElement.innerText = resultMessage;
        randomNumber = Math.floor(Math.random() * 10) + 1;
    });
});