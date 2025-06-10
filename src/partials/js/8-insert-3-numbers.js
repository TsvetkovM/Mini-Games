const guessGame = document.getElementById("8");

if (guessGame) {
    guessGame.innerHTML = `
        <style>
            .game-wrapper-8 {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
                max-width: 500px; 
                margin: 0 auto; 
            }
            .input-group-8 {
                display: flex;
                gap: 15px;
                flex-wrap: wrap;
                justify-content: center;
            }
            .number-input-8-1, .number-input-8-2, .number-input-8-3 {
                width: 120px;
                height: 35px;
                font-size: 12px;
                outline: none;
                text-align: center;
                border-radius: 20px;
                background-color: #D7D7D7;
                transition: 0.3s;
            }
            .number-input-8-1:focus, .number-input-8-2:focus, .number-input-8-3:focus {
                background-color: #ffffff;
                border-color: #000;
            }
            .submit-btn-8 {
                width: 60px;
                height: 40px;
                background-color: #444;
                color: white;
                font-size: 16px;
                cursor: pointer;
                border-radius: 10px;
                transition: 0.3s;
            }
            .submit-btn-8:hover {
                background-color: #222;
            }
            .result-output-8 {
                font-size: 22px;
                font-weight: bold;
                color: #000000;
                text-align: center; 
            }
        </style>
        <div class="game-wrapper-8">
            <p>Введіть три числа:</p>
            <div class="input-group-8">
                <input type="number" class="number-input-8-1" id="input1-8" placeholder="Введіть число">
                <input type="number" class="number-input-8-2" id="input2-8" placeholder="Введіть число">
                <input type="number" class="number-input-8-3" id="input3-8" placeholder="Введіть число">
                <button class="submit-btn-8">&#128269;</button>
            </div>
            <p class="result-output-8"></p>
        </div>
    `;

    const checkButton = guessGame.querySelector(".submit-btn-8");
    const resultElement = guessGame.querySelector(".result-output-8");
    const input1 = guessGame.querySelector("#input1-8");
    const input2 = guessGame.querySelector("#input2-8");
    const input3 = guessGame.querySelector("#input3-8");

    checkButton.addEventListener("click", () => {
        let num1 = parseInt(input1.value);
        let num2 = parseInt(input2.value);
        let num3 = parseInt(input3.value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            resultElement.innerText = "Будь ласка, введіть всі три числа.";
        } else {
            let maxNumber = Math.max(num1, num2, num3);
            resultElement.innerText = `Найбільше число, яке ви ввели - ${maxNumber}`;
        }
    });
}