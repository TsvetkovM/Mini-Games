document.addEventListener("DOMContentLoaded", function () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let checkButton = document.querySelector("#checkButton");
    let resultElement = document.querySelector("#result");
    let userInput = document.querySelector("#userInput");
    checkButton.addEventListener("click", function () {
        let userNumber = parseInt(userInput.value);
        let resultMessage = "";
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
            resultMessage = "Будь ласка, введіть число від 1 до 10.";
        } else if (userNumber === randomNumber) {
            resultMessage = `Вітаю, ви вгадали число! (${randomNumber})`;
            resultElement.classList.add("success");
        } else {
            resultMessage = `Ви програли, комп’ютер загадав (${randomNumber})`;
            resultElement.classList.add("failure");
        }
        resultElement.innerText = resultMessage;
        randomNumber = Math.floor(Math.random() * 10) + 1;
    });
});

