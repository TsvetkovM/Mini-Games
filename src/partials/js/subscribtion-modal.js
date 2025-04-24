    const modal = document.getElementById("subscriptionModal");
    const openBtn = document.getElementById("subscribeBtn");
    const closeBtn = document.getElementById("closeModal");

    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
 