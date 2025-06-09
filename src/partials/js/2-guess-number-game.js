// Создаем и добавляем стили в head
const styles = `
    .guess-container {
        display: flex;
        border: 2px solid #000;
        border-radius: 20px;
        width: fit-content;
        background-color: #f5f5f5;
        align-items: center;
    }

    .guess-input {
        width: 150px;
        height: 35px;
        font-size: 18px;
        border: none;
        outline: none;
        text-align: center;
        border-radius: 20px 0 0 20px;
        background-color: #D7D7D7;
        padding: 0;
        margin: 0;
    }

    .guess-button {
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

    .guess-button:hover {
        background-color: #222222;
    }

    .result {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
        display: none;
    }

    .result.success {
        color: green;
        display: block;
    }

    .result.failure {
        color: red;
        display: block;
    }

    .guess-container-wrap {
        display: flex;
        gap: 20px;
        align-items: center;
    }
`;
const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

// Создаем HTML-контент
document.body.insertAdjacentHTML("beforeend", `
    <div class="guess-container-wrap">
        <div class="guess-container">
            <input type="text" class="guess-input" placeholder="Введіть число">
            <button class="guess-button">&#128269;</button>
        </div>
        <p class="result"></p>
    </div>
`);

// Логика игры
const guessButton = document.querySelector(".guess-button");
const resultElement = document.querySelector(".result");
const userInput = document.querySelector(".guess-input");

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