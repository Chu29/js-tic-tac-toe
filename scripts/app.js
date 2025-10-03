'use strict'

// select necessary dom elements
const winMsg = document.querySelector('win-msg')
const winMsgBox = document.querySelector('.winner-msg-container')
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
const checkWinner = (playerMoves, wineLines) => {
  return wineLines.some((outcome) => {
    return outcome.every((index) => {
      return playerMoves.includes(index)
    })
  })
}

// add event listeners to all the boxes
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', () => {
    let isWinner = false

    if (switchPlayer) {
      boxes[i].innerHTML = '0'
      player0.push(boxes.indexOf(boxes[i]))
      boxes[i].style.background = '#fab12f'
      switchPlayer = false
      boxes[i].disabled = true
      player0.sort()

      isWinner = checkWinner(player0, wineLines)
      if (isWinner) {
        console.log('Player 1 wins')
        winMsgBox.classList.remove('hidden')
      }
    } else {
      player1.push(boxes.indexOf(boxes[i]))
      boxes[i].innerHTML = 'x'
      boxes[i].style.background = '#1b3c53'
      switchPlayer = true
      boxes[i].disabled = true
      player1.sort()

      isWinner = checkWinner(player1, wineLines)
      if (isWinner) {
        console.log('Player 2 wins')
      }
    }
  })
}
