const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
import './partials/js/games-list'
import './partials/js/greeting-modal'
import './partials/js/1-check-year'
import './partials/js/2-guess-number-game'
import './partials/js/3-rock-paper-scissors'
import './partials/js/4-calculator'
import './partials/js/5-time-calculator'
import './partials/js/6-google-dinosaur'
import './partials/js/7-football'
import './partials/js/8-insert-3-numbers'
import './partials/js/9-our-team'
import './partials/js/10-choose-scientists'
import './partials/js/subscribtion-modal'
