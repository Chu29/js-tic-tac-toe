'use strict'

// select necessary dom elements
const winMsg = document.querySelector('win-msg')
const newGameBtn = document.querySelector('.new-game')
const resetGameBtn = document.querySelector('.reset-btn')
const boxes = [...document.querySelectorAll('.box')]
let switchPlayer = true
const player0 = []
const player1 = []

const wineLines = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

// check if there's a winner
const checkWinner = () => {}

// add event listeners to all the boxes
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (switchPlayer) {
      boxes[i].innerHTML = '0'
      player0.push(boxes.indexOf(boxes[i]))
      console.log('Player 1', player0)
      boxes[i].style.background = '#fab12f'
      switchPlayer = false
    } else {
      player1.push(boxes.indexOf(boxes[i]))
      console.log('Player 2', player1)
      boxes[i].innerHTML = 'x'
      boxes[i].style.background = '#1b3c53'
      switchPlayer = true
    }
  }
}

console.log(player0, player1)
