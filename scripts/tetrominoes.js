<script src="board.js"></script>;

// We have 7 tetrominoes (pieces in tetris), 5 of them are 3x3 matrix and 2 are 4x4. By the way, a matrix is an array of arrays!
//The tetrominoes are: Z, S, J, T, L, I and O, they all rotate I and O are 4x4
//1 is occupied and colored, and 0 is vacant

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
