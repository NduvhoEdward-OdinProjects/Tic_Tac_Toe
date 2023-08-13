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

  return {placePiece}
}

let p1 = Player('Player1', 'X');
let p2 = Player('Player2', 'O'); 
let currentPlayer = p1;

function play(event) { 
  
  if (event.target.textContent !== '') return;

  currentPlayer.placePiece(event);
  currentPlayer = currentPlayer === p1 ? p2 : p1;
}

