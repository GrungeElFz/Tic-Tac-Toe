// STATE
const gameState = {
    players: ['x', 'o'],
  };

  
  
// DOM SELECTORS
const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-index]');
const resetButton = document.getElementById('reset-button');
const afterMatchMessage = document.getElementById('after-match-message');
  
let turn = gameState.players[0];

const boardState = Array(cells.length);
boardState.fill(null);



// DOM MANIPULATIONS



// HELPER FUNCTIONS
const clickChecker = (event) => {
    console.log('Clicked');
}

const cellHover = () => {
    cells.forEach(cell => {
        cell.classList.remove('x-hover');
        cell.classList.remove('o-hover');
    });

    const hoverClass = `${turn}-hover`;

    cells.forEach((cell) => {
        if (cell.innerText === '') {
            cell.classList.add(hoverClass);
        }
    });
}

const cellClick = (event) => {
    const cell = event.target;
    const cellIndex = cell.dataset.index;

    if (!cell.innerText === '') {
        return;
    }

    if (turn === gameState.players[0]) {
        cell.innerText = gameState.players[0];
        boardState = gameState.players[0];
        turn = gameState.players[1];
    } else {
        cell.innerText = gameState.players[1];
        boardState = gameState.players[1];
        turn = gameState.players[0];
    }
}



// EVENT LISTENERS
cells.forEach(cell => {
    cell.addEventListener('click', clickChecker, {once: true});
})





// BOOTSTRAP
cellHover()