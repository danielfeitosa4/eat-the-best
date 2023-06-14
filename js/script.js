const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')
const card4 = document.querySelector('#card-4')
const card5 = document.querySelector('#card-5')
const allCards = document.querySelectorAll('.card')

const borderSelect = () => {

  addEventListener('click', () => {
    card1.classList.add('borderGreen')
  })

}

borderSelect()