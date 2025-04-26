const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
 