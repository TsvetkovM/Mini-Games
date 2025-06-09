const rockPaperScissors = document.getElementById("3");
    rockPaperScissors.innerHTML = (`
      
        <h2 class = "RPS"> Камінь-Ножиці-Папір </h2>
       
        <button class="rock" ></button>
        <button class="scissors" ></button>
        <button class="paper" ></button>
        
     `);



     function selectElement(){
        return Math.floor(Math.random()* (max - min) + min)
     }

     console.log(selectElement(3));