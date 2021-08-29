// Control de pieces with the keyboard

document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
  if (event.keyCode === 37) {
    piece.moveLeft();
  } else if (event.keyCode === 38) {
    piece.rotate();
  } else if (event.keyCode === 39) {
    piece.moveRight();
  } else if (event.keyCode === 40) {
    piece.moveDown();
  }
}
