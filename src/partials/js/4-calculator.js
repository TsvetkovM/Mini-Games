
document.addEventListener("DOMContentLoaded", () => {
    const calculatorHTML = `
        <div class="calculator">
            <input type="number" id="num1" placeholder="Введіть число">
            <div class="button-container">
                <button class="btn" data-op="+">+</button>
                <button class="btn" data-op="-">-</button>
                <button class="btn" data-op="*">*</button>
                <button class="btn" data-op="/">÷</button>
            </div>
            <input type="number" id="num2" placeholder="Введіть число">
            <button class="btn equals">=</button>
            <div class="result-container"></div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", calculatorHTML);
});
document.addEventListener("DOMContentLoaded", () => {
    let operation = "";
    const buttons = document.querySelectorAll(".btn[data-op]");
    const equalsButton = document.querySelector(".equals");
    const resultContainer = document.querySelector(".result-container");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            operation = button.getAttribute("data-op");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    equalsButton.addEventListener("click", () => {
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;

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
});

const styles = `
    .calculator {
        align-items: center;
        flex-wrap: wrap;
    }
    .button-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 120px;
    }
    .btn {
        width: 55px;
        height: 55px;
        font-size: 20px;
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
`;


const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);