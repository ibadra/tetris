import { drawSquare, vacantSquare } from "./board";

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

//PIECE CONSTRUCTION FUNCTION

function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];
  this.color = color;
  this.x = 3; //Initial position in squares of the tetromino in the x axis before dropping
  this.y = -2; //Initial position in squares of the tetromino in the y axis before dropping (it is hidden from the view)
}

//COORDINATES OF A SQUARE

for (r = 0; r < this.activeTetromino.length; r++) {
  for (c = 0; c < this.activeTetromino.length; c++) {
    if (this.activeTetromino[r][c]) {
      drawSquare(c, r, this.color);
    }
  }
}

//this.x+c ---> This gives the x coordinates of a square
//this.y+r ---> This gives the y coordinates of a square

//MOVE THE ACTIVE TETROMINO

let piece = new Piece(Z, "blue");

//Move piece down
Piece.prototype.moveDown = function () {
  if (!this.collision(0, 1, this.activeTetromino)) {
    this.unDraw();
    this.y++;
    this.draw();
  } else {
    //
  }
};

//Move piece to the left
Piece.prototype.moveLeft = function () {
  if (!this.collision(-1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x--;
    this.draw();
  } else {
    //
  }
};

//Move piece to the right
Piece.prototype.moveRight = function () {
  if (!this.collision(1, 0, this.activeTetromino)) {
    this.unDraw();
    this.x++;
    this.draw();
  }
};

//Draw and undraw when moving

Piece.prototype.draw = function () {
  for (r = 0; r < this.activeTetromino.length; r++) {
    for (c = 0; c < this.activeTetromino.length; c++) {
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, this.color);
      }
    }
  }
};

Piece.prototype.draw = function () {
  for (r = 0; r < this.activeTetromino.length; r++) {
    for (c = 0; c < this.activeTetromino.length; c++) {
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, vacantSquare);
      }
    }
  }
};

//Collision detection function

// Piece.prototype.collision = function(x, y, piece);
