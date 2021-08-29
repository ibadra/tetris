// We have 7 tetrominoes (pieces in tetris), 5 of them are 3x3 matrix and 2 are 4x4. By the way, a matrix is an array of arrays!
//The tetrominoes are: Z, S, J, T, L, I and O, they all rotate I and O are 4x4
//1 is occupied and colored, and 0 is vacant

const PIECES = [
  [Z, "red"],
  [S, "green"],
  [T, "cyan"],
  [O, "indigo"],
  [I, "blue"],
  [L, "purple"],
  [J, "orange"],
];

function randomPiece() {
  //This function generates a new tetromino after we have locked one
  let randomN = Math.floor(Math.random() * PIECES.length);
  return new Piece(PIECES[randomN][0], PIECES[randomN][1]);
}

///Z TETROMINO

const Z = [
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
];

//Drawing the z tetromino

let piece = Z[0]; //Initialize the piece variable with the first form of the Z tetromino
const pieceColor = "orange"; //Draw an orange tetromino

for (r = 0; r < piece.length; r++) {
  for (c = 0; c < piece.length; c++) {
    if (piece[r][c]) {
      drawSquare(c, r, pieceColor);
    }
  }
}

//PIECE CONSTRUCTION FUNCTION

function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.color = color;
  this.x = 3; //Initial position in squares of the tetromino in the x axis before dropping
  this.y = -2; //Initial position in squares of the tetromino in the y axis before dropping (it is hidden from the view)
}
