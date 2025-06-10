const calculatorGame = document.getElementById("4");

if (calculatorGame) {
    calculatorGame.innerHTML = `
        <style>
            .calculator {
                padding: 36px;
                padding-left:423px;
                gap: 50px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }
            .button-container {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .row {
                display: flex;
                gap: 10px;
                justify-content: center;
            }
            .btn {
                width: 35px;
                height: 30px;
                font-size: 15px;
                cursor: pointer;
                background-color: #000000;
                color: #ffffff;
                border: none;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .btn.active {
                background-color: #444444;
            }
            .result-container {
                font-size: 20px;
                font-weight: bold;
                margin-left: 10px;
            }
            input {
                width:135px;
                height:35px;
                background-color: #D7D7D7;
                border: 1px solid #ccc;
                padding: 5px;
                font-size: 12px;
                border-radius: 20px;
            }
        </style>

        <p>Калькулятор</p>
        <div class="calculator">
            <input type="number" id="num1" placeholder="    Введіть число">
            <div class="button-container">
                <div class="row">
                    <button class="btn" data-op="+">+</button>
                    <button class="btn" data-op="*">*</button>
                </div>
                <div class="row">
                    <button class="btn" data-op="-">-</button>
                    <button class="btn" data-op="/">÷</button>
                </div>
            </div>
            <input type="number" id="num2" placeholder="    Введіть число">
            <button class="btn equals">=</button>
            <div class="result-container"></div>
        </div>
    `;

    let operation = "";
    const buttons = calculatorGame.querySelectorAll(".btn[data-op]");
    const equalsButton = calculatorGame.querySelector(".equals");
    const resultContainer = calculatorGame.querySelector(".result-container");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            operation = button.getAttribute("data-op");
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    equalsButton.addEventListener("click", () => {
        const num1 = calculatorGame.querySelector("#num1").value;
        const num2 = calculatorGame.querySelector("#num2").value;

        if (num1 === "" || num2 === "") {
            resultContainer.innerHTML = `<p>Помилка: введіть обидва числа!</p>`;
            return;
        }

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let res = "Оберіть операцію!";

        if (operation === "+") {
            res = n1 + n2;
        } else if (operation === "-") {
            res = n1 - n2;
        } else if (operation === "*") {
            res = n1 * n2;
        } else if (operation === "/") {
            res = n2 !== 0 ? n1 / n2 : "Помилка! Ділення на нуль неможливе";
        }

        resultContainer.innerHTML = `<p>Результат: ${res}</p>`;
    });
}