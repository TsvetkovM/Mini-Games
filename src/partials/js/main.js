document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".main_lists").forEach(item => {
        item.addEventListener("click", () => {
            const gameId = item.id.split("-")[1]; 
            const selectedGame = games.find(game => game.id == gameId);

            if (selectedGame) {
                const script = document.createElement("script");
                script.src = selectedGame.script;
                document.body.appendChild(script);
            }
        });
    });
});
