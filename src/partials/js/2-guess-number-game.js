const guessGame = document.getElementById("2");

if (guessGame) {
    guessGame.innerHTML = `
        <style>
            .game-container-2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 36px;
            }
            .wrapper-2 {
                display: flex;
                gap: 36px; 
                align-items: center;
            }
            .guess-container-2 {
                display: flex;
                border-radius: 20px;
                align-items: center;
                padding: 10px;
            }
            .guess-input-2 {
                width: 150px;
                height: 35px;
                font-size: 18px;
                outline: none;
                text-align: center;
                border-radius: 20px 0 0 20px;
                background-color: #D7D7D7;
                font-size: 13px;
            }
            .guess-button-2 {
                width: 35px;
                height: 35px;
                background-color: #000000;
                color: white;
                font-size: 18px;
                cursor: pointer;
                border-radius: 0 20px 20px 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .guess-button-2:hover {
                background-color: #222222;
            }
            .result-2 {
                font-size: 20px;
                font-weight: bold;
                margin-top: 10px;
                display: none;
            }
            .result-2.success {
                color: green;
                display: block;
            }
            .result-2.failure {
                color: red;
                display: block;
            }
        </style>
        <div class="game-container-2">
            <p>Вгадай число, яке загадав комп’ютер</p>
            <div class="wrapper-2">
                <div class="guess-container-2">
                    <input type="text" class="guess-input-2" placeholder="Введіть число">
                    <button class="guess-button-2">&#128269;</button>
                </div>
                <p class="result-2"></p>
            </div>
        </div>
    `;

    const guessButton = guessGame.querySelector(".guess-button-2");
    const resultElement = guessGame.querySelector(".result-2");
    const userInput = guessGame.querySelector(".guess-input-2");

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    guessButton.addEventListener("click", () => {
        let userNumber = parseInt(userInput.value);
        let resultMessage = "";

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
            resultMessage = "Будь ласка, введіть число від 1 до 10.";
            resultElement.classList.remove("success", "failure");
        } else if (userNumber === randomNumber) {
            resultMessage = `Вітаю, ви вгадали число! (${randomNumber})`;
            resultElement.classList.add("success");
            resultElement.classList.remove("failure");
        } else {
            resultMessage = "Неправильно! Спробуй ще раз";
            resultElement.classList.add("failure");
            resultElement.classList.remove("success");
        }

        resultElement.innerText = resultMessage;
        resultElement.style.display = "block";
        randomNumber = Math.floor(Math.random() * 10) + 1;
    });
}