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
    this.lock();
    piece = randomPiece();
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

//Rotate piece
// this.tetrominoN = 0;
// this.activeTetromino = this.tetromino[this.tetrominoN];
// this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
Piece.prototype.rotate = function () {
  let nextPattern =
    this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
  kick = 0;
  if (this.tetromino(0, 0, nextPattern)) {
    if (this.x > COL / 2) {
      kick = -1;
    } else {
      kick = 1;
    }
  }
  if (!this.collision(kick, 0, nextPattern)) {
    this.unDraw();
    this.x += kick;
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
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

Piece.prototype.collision = function (x, y, piece) {
  for (r = 0; r < this.piece.length; r++) {
    for (c = 0; c < this.piece.length; c++) {
      if (!piece[r][c]) {
        continue;
      }
      let newX = this.x + c + r;
      let newY = this.y + r + y;
      if (newX < 0 || newX >= COL || newY > ROW) {
        return true;
      }
      if (newY < 0) {
        continue;
      }
      if (board[newY][newX] != vacantSquare) {
        return true;
      }
    }
  }
  return false;
};
