export default class GameView {

    updateBoard(game){
        this.updateTurn(game);
        for (let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile [data-index="${i}"]`);
            tile.textContent = game.board[i];

            let classType = gmae.board
        };
    };

    updateTurn(game){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        playerX.classList.remove("active");
        playerY.classList.remove("active");

        if(game.turn == 'X') {
            playerX.classList.add('active');

        } else {
            playerO.classList.add('active');
        }
    }
}