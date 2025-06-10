const gameContainerEL = document.querySelector(".js-games")

const games = [
  {
    id: 1,
    name: 'Перевір в який рік ти народився',
    class: "standart",

  },
  {
    id: 2,
    name: 'Вгадай число, яке загадав комп’ютер',
    class: "standart"
  },
  {
    id: 4,
    name: 'Калькулятор',
    class: "standart",
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    class: "standart",
  },
  {
    id: 7,
    name: 'Футбол',
    class: "standart",
  },
  {
    id: 8,
    name: 'Введіть 3 числа',
    class: "standart",
  },


]

const list = games.map((game) => {
  return `<li class="reset-li ${game.class}" id=${game.id}>
    <h2 class="flexcenter" name-main>${game.name}</h2>
    </li>
    <hr class="line">`

}).join('')

gameContainerEL.insertAdjacentHTML('beforeend', list)