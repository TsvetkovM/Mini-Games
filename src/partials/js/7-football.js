const footballGame = document.getElementById("7");

if (footballGame) {
    footballGame.innerHTML = `
        <style>
        .football-game-7{
        padding-left:400px;
        }
            canvas {
                border: 2px solid #000000;
                background: #228B22;
                display: block;
                border-radius: 37px;
            }
        </style>
               <p>Футбол</p>
       <div class="football-game-7">
 
        <canvas id="gameCanvas" width="720" height="220"></canvas>
        </div>
    `;

    const gameField = footballGame.querySelector("#gameCanvas");
    const gameContext = gameField.getContext("2d");

    let football = {
        x: gameField.width / 2,
        y: gameField.height / 2,
        radius: 20
    };

    gameField.addEventListener("mousemove", (event) => {
        const fieldRect = gameField.getBoundingClientRect();
        const mouseX = event.clientX - fieldRect.left;
        const mouseY = event.clientY - fieldRect.top;

        football.x = Math.min(Math.max(football.radius, mouseX), gameField.width - football.radius);
        football.y = Math.min(Math.max(football.radius, mouseY), gameField.height - football.radius);
    });

    function drawFootballPattern() {
        gameContext.fillStyle = "white";
        gameContext.beginPath();
        gameContext.arc(football.x, football.y, football.radius, 0, Math.PI * 2);
        gameContext.fill();

        gameContext.strokeStyle = "black";
        gameContext.lineWidth = 3;

        // Рисуем шестигранную сетку
        for (let i = 0; i < 6; i++) {
            let angle = (Math.PI / 3) * i;
            let xOffset = Math.cos(angle) * football.radius;
            let yOffset = Math.sin(angle) * football.radius;
            gameContext.beginPath();
            gameContext.moveTo(football.x, football.y);
            gameContext.lineTo(football.x + xOffset, football.y + yOffset);
            gameContext.stroke();
        }
    }

    function animateGame() {
        gameContext.clearRect(0, 0, gameField.width, gameField.height);
        drawFootballPattern();
        requestAnimationFrame(animateGame);
    }

    animateGame();
}