const timeCalculatorGame = document.getElementById("5");

if (timeCalculatorGame) {
    timeCalculatorGame.innerHTML = `
        <style>
            .time-card {
                display: flex;
                align-items: center;
                gap: 350px;
                padding: 36px;
                border-radius: 12px;
                max-width: 300px;
                text-align: center;
            }
            .time-title {
                font-size: 22px;
                font-weight: bold;
                color: #333;
            }
            .time-container {
                padding-left:400px;
                display: flex;
                align-items: center;
               
            }
            .time-input {
            
                width: 150px;
                height: 35px;
                font-size: 13px;
                border: none;
                outline: none;
                text-align: center;
                border-radius: 20px 0 0 20px;
                background-color: #D7D7D7;
                padding: 0;
                margin: 0;
            }
            .time-button {
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
            .time-button:hover {
                background-color: #222;
            }
            .result-container {
            display:flex;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                margin-top: 10px;
            }
        </style>
<p>Калькулятор часу</p>
        <div class="time-card">
            <div class="time-container">
                <input type="number" class="time-input" id="milliseconds" placeholder="Мілісекунди">
                <button class="time-button">&#128269;</button>
            </div>
            <div class="result-container" id="result">Результат тут</div>
        </div>
    `;

    const convertButton = timeCalculatorGame.querySelector(".time-button");
    const resultContainer = timeCalculatorGame.querySelector("#result");
    const inputField = timeCalculatorGame.querySelector("#milliseconds");

    convertButton.addEventListener("click", () => {
        const ms = parseInt(inputField.value);
        if (isNaN(ms) || ms < 0) {
            resultContainer.textContent = "Введіть коректне число мілісекунд.";
            return;
        }

        let seconds = Math.floor(ms / 1000);
        const days = Math.floor(seconds / 86400);
        seconds %= 86400;
        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        const minutes = Math.floor(seconds / 60);
        seconds %= 60;

        resultContainer.textContent = `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });
}