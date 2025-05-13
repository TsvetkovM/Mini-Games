function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".backdrop-is-hidden").style.display = "flex";
});

document.querySelector("[data-modal-close]").addEventListener("click", function () {
    document.querySelector(".backdrop-is-hidden").style.display = "none";
}); 


let userName = ""; 

document.querySelector(".greeting-modal-input-save").addEventListener("click", function () {
    userName = document.querySelector("#nameInput").value.trim(); 
    
    if (userName !== "") {
        updateHeaderGreeting();
        document.querySelector(".backdrop-is-hidden").style.display = "none";
    }
});


function updateHeaderGreeting() {
    const headerExtras = document.querySelector(".header-extras");
    
    const oldGreeting = document.querySelector(".header-greeting");
    if (oldGreeting) {
        oldGreeting.remove();
    }
    const greetingText = document.createElement("p");
    greetingText.classList.add("header-greeting");
    greetingText.textContent = `Вітаємо, ${userName}!`;
    
    headerExtras.appendChild(greetingText);
}



