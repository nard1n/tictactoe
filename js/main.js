import Game from './Game.js';
import GameView from './GameView.js';

let tiles = document.querySelectorAll(".board-tile")
let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => onRestartClick());

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i){
    game.makeMove(i);
    gameView.update(game);
}

function onRestartClick() {
    game = new Game();
    gameView.update(game);

    let tile = document.querySelectorAll(".board-tile")
    tile.forEach((e)=> {
        e.classList.remove("tile-winner")
    })
}
