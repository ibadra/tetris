//Get element by ID, DOM manipulation
const canvas = document.getElementById("board");
const context = canvas.getContext("2d");
const canvasNext = document.getElementById("next");
const ctxNext = canvasNext.getContext("2d");

// Calculate size of canvas
context.canvas.width = COLS * BLOCK_SIZE;
context.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
