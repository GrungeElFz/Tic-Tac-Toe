// STATE
const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  };
let turn = gameState.players[0];




// DOM SELECTORS
const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-index]');
const resetButton = document.getElementById('reset-button');




// DOM MANIPULATIONS




// HELPER FUNCTIONS
const clickChecker = (event) => {
    console.log('Clicked');
}



// EVENT LISTENERS
cells.forEach(cell => {
    cell.addEventListener('click', clickChecker, {once: true});
})





// BOOTSTRAP
