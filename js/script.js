// Cells click events...
let cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener('click', play);
});

const Player = (name, symbol) => {
  const player = name;
  const playerMark = symbol;

  let placePiece = (event) => {
     event.target.textContent = playerMark; 
  };

  return {playerMark, placePiece}
}

let p1 = Player('Player1', 'X');
let p2 = Player('Player2', 'O'); 
let currentPlayer = p1;

function play(event) { 

  if (event.target.textContent !== '') return;

  currentPlayer.placePiece(event);
  currentPlayer = currentPlayer === p1 ? p2 : p1;

 
  if(checkWin()) console.log('event'); 
}

function checkWin() {

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}
