const leapYearGame = document.getElementById("1");

if (leapYearGame) {
    leapYearGame.innerHTML = `
        <style>
            .year-container {
                display: flex;
                border-radius: 20px;
                width: fit-content;
                background-color: #f5f5f5;
                align-items: center;
            }
            .year-input {
                width: 150px;
                height: 35px;
                font-size: 12px;
                border: none;
                outline: none;
                text-align: center;
                border-radius: 20px 0 0 20px;
                background-color: #D7D7D7;
                padding: 0;
                margin: 0;
                font-size: 12px;
            }
            .year-button {
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
            .year-button:hover {
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
        
            .year-container-wrap {
            padding: 36px;
                padding-left: 450px;
                display: flex;
                gap: 100px;
                align-items: center;
            }
        
        </style>
        <div class="year-container-game">
            <p>Перевір в який рік ти народився</p>
            <div class="year-container-wrap">
                <div class="year-container">
                    <input type="text" class="year-input" placeholder="Рік народження">
                    <button class="year-button">&#128269;</button>
                </div>
                <p class="result"></p>
            </div>
        </div>
    `;

    const yearButton = leapYearGame.querySelector(".year-button");
    const resultElement = leapYearGame.querySelector(".result");
    const userInput = leapYearGame.querySelector(".year-input");

    yearButton.addEventListener("click", () => {
        let userYear = parseInt(userInput.value);
        let resultMessage = "";

        if (isNaN(userYear) || userYear < 0) {
            resultMessage = "Будь ласка, введіть коректний рік.";
            resultElement.classList.remove("success", "failure");
        } else if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
            resultMessage = `Ви народилися у високосний рік!`;
            resultElement.classList.add("success");
            resultElement.classList.remove("failure");
        } else {
            resultMessage = `Ви народилися не у високосний рік!`;
            resultElement.classList.add("failure");
            resultElement.classList.remove("success");
        }

        resultElement.innerText = resultMessage;
        resultElement.style.display = "block";
    });
}