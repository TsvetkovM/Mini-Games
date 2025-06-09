
const gameField = document.createElement("canvas");
gameField.width = 720;
gameField.height = 220;
gameField.style.cssText = "border: 2px solid #000000; background: #228B22; display: block; border-radius: 37px;";
document.body.appendChild(gameField);

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


function renderFootball() {
    gameContext.clearRect(0, 0, gameField.width, gameField.height);
    gameContext.fillStyle = "white";
    gameContext.beginPath();
    gameContext.arc(football.x, football.y, football.radius, 0, Math.PI * 2);
    gameContext.fill();
}


function animateGame() {
    renderFootball();
    requestAnimationFrame(animateGame);
}

animateGame();