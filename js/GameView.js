export default class GameView {

    updateBoard(game){
        console.log("this is a board insiide the gameview");
        console.log(game.board);
        for (let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile [data-index='${i}']`);
            console.log(tile);
            tile.textContent = game.board[i];
        };

    };
}