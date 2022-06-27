export default class Game {

    constructor() {
        this.newGame();
    }

    newGame() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
        this.winner = null;
    }

    nextTurn() {
        if(this.turn == "X") {
            this.turn = "O";
            
        } else {
            this.turn = "X";
        }
    }
    
    makeMove(i) {

        if(this.endofGame()){
            return;          
        }                    
        
        if(this.board[i]){
            return;
        }

        this.board[i] = this.turn;
        
        let winningCombination = this.checkWin();
        
        if(!winningCombination){
            this.nextTurn();
        }
    }

    checkWin(){
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        
        for(const combo of winningCombos){
            const [a,b,c] = combo;

            if(this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                    return combo;
                }
        }
        return null;
    }

    endofGame(){
        let winningCombination = this.checkWin();
        if(winningCombination){
            return true;
        } else {
            return false;
        }
    }

}