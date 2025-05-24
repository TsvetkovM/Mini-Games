<<<<<<< HEAD
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
=======
// const openModalBtn = document.querySelector('.open-modal-btn');
// const closeModalBtn = document.querySelector('.close-modal-btn');
// const modal = document.querySelector('.modal');

// openModalBtn.addEventListener('click', () => {
//   modal.classList.add('is-open');
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.classList.remove('is-open');
// });
>>>>>>> main
