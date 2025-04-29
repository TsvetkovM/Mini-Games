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
