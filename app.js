

//let gameActive = true;


const player = (name, sign) => {
    return {name, sign}
}

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');


let currentPlayer = player1;







let game = (() => {

    gameState = ['', '', '', '', '', '', '', '', ''];

    let player = {
        name: 'Plyer 1',
        sign: 'X'
    };


    const cellElement = document.querySelectorAll('.cell');


    function handleCellPlayed(e) {
        let index = e.target.id
        if (!gameState[index]) {
            gameState[index] = player.sign
            e.target.innerHTML = player.sign;
            handleResultValidation();
        }    
    }


    function handleResultValidation() {
        if (
            gameState[0] == gameState[1] && gameState[1] == gameState[2] && (gameState[2] == 'X' || gameState[2] == 'O') ||
            gameState[3] == gameState[4] && gameState[4] == gameState[5] && (gameState[5] == 'X' || gameState[5] == 'O') ||
            gameState[6] == gameState[7] && gameState[7] == gameState[8] && (gameState[8] == 'X' || gameState[8] == 'O') ||
            gameState[0] == gameState[3] && gameState[3] == gameState[6] && (gameState[6] == 'X' || gameState[6] == 'O') ||
            gameState[1] == gameState[4] && gameState[4] == gameState[7] && (gameState[7] == 'X' || gameState[7] == 'O') ||
            gameState[2] == gameState[5] && gameState[5] == gameState[8] && (gameState[8] == 'X' || gameState[8] == 'O') ||
            gameState[0] == gameState[4] && gameState[4] == gameState[8] && (gameState[8] == 'X' || gameState[8] == 'O') ||
            gameState[2] == gameState[4] && gameState[4] == gameState[6] && (gameState[6] == 'X' || gameState[6] == 'O')) {
                alert(`Winner is ${player.name}`)
                handleRestartGame();
            }  else handlePlayerChange();
    }



    function handlePlayerChange() {
        if (currentPlayer == player1) {
            currentPlayer = player2;
            player = player2;
        } else {
            currentPlayer = player1;
            player = player1;
        }
    }




    function handleRestartGame() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = player1;
        player = player1;
    }

    cellElement.forEach(x = function(x) {x.addEventListener('click', function(e){
        handleCellPlayed(e);
    })})

})();









































function handleCellClick() {

}

