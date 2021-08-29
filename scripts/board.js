//ACCESSING EACH CANVAS
const canvas = document.getElementById("board");
const context = canvas.getContext("2d");
const canvasNext = document.getElementById("next");
const contextNext = canvasNext.getContext("2d");

canvas.style.backgroundImage = "url('images/img.jpg')";
canvasNext.style.backgroundImage = "url('images/img.jpg')";

//CREATING THE BOARD
const ROW = 20;
const COL = 10;
const SQ = 25; //Size of each square
const vacantSquare = "rgba(0, 0, 0, 0.5)";

//boards is first an empty array
let board = [];
//for loop to create the rows
for (r = 0; r < ROW; r++) {
  board[r] = []; //initialize the rows as an empty array
  //for loop to create the columns
  for (c = 0; c < COL; c++) {
    board[r][c] = vacantSquare; //Now each row in every column is vacant
  }
}

//DRAWING A SQUARE

function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * SQ, y * SQ, SQ, SQ);
  context.strokeStyle = "gray";
  context.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

function drawSquareNext(x, y, color) {
  contextNext.fillStyle = color;
  contextNext.fillRect(x * SQ, y * SQ, SQ, SQ);
  contextNext.strokeStyle = "gray";
  contextNext.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

//DRAWING THE BOARD

//For loop to draw the rows and columns
function drawBoard() {
  for (r = 0; r < ROW; r++) {
    for (c = 0; c < COL; c++) {
      drawSquare(c, r, board[r][c]);
      drawSquareNext(c, r, board[r][c]);
    }
  }
}

drawBoard();
