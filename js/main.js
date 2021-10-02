import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
  onResartClick();
});

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    //console.log(tile.dataset.index);
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  // do something
  game.makeMove(i);
  // update board
  gameView.updateBoard(game);
}

function onResartClick() {
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
