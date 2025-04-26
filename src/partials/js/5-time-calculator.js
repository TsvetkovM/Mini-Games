    // body {
    //   font-family: Arial, sans-serif;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   margin-top: 50px;
    // }
    // input {
    //   padding: 10px;
    //   font-size: 16px;
    //   width: 200px;
    // }
    // button {
    //   padding: 10px;
    //   font-size: 16px;
    //   margin-left: 10px;
    // }
    // .result {
    //   margin-top: 20px;
    //   font-size: 20px;
    // }
 
  {/* <h1>Калькулятор часу</h1>
  <div>
    <input type="number" id="milliseconds" placeholder="Введіть мілісекунди">
    <button onclick="convertTime()">Перевести</button>
  </div>
  <div class="result" id="result"></div> */}

    function convertTime() {
      const ms = parseInt(document.getElementById("milliseconds").value);
      if (isNaN(ms) || ms < 0) {
        document.getElementById("result").textContent = "Введіть коректне число мілісекунд.";
        return;
      }

      let seconds = Math.floor(ms / 1000);
      const days = Math.floor(seconds / 86400);
      seconds %= 86400;
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      const minutes = Math.floor(seconds / 60);
      seconds %= 60;

      document.getElementById("result").textContent = `${days} дн. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
