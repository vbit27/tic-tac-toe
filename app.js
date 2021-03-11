

//let gameActive = true;


const player = (name, sign) => {
    return {name, sign}
}

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');


let currentPlayer = player1;







let game = (() => {

    gameState = ['', '', '', '', '', '', '', '', '']

    let player = {
        name: 'Plyer 1',
        sign: 'X'
    }


    const cellElement = document.querySelectorAll('.cell');


    function handleCellPlayed(e) {
        let index = e.target.id
        gameState[index] = player.sign
        handleResultValidation()
        handlePlayerChange();
    }


    function handleResultValidation() {
        if (
            gameState[0] == gameState[1] && gameState[1] == gameState[2] ||
            gameState[3] == gameState[4] && gameState[4] == gameState[5] ||
            gameState[6] == gameState[7] && gameState[7] == gameState[8] ||
            gameState[0] == gameState[3] && gameState[3] == gameState[6] ||
            gameState[1] == gameState[4] && gameState[4] == gameState[7] ||
            gameState[2] == gameState[5] && gameState[5] == gameState[8] ||
            gameState[0] == gameState[4] && gameState[4] == gameState[8] ||
            gameState[2] == gameState[4] && gameState[4] == gameState[6]) {
                alert('equal')
            }

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


    cellElement.forEach(x => x.addEventListener('click', function(e){
        handleCellPlayed(e)
    }, { once: true}))

})();


// Factory Function







































function handleCellClick() {

}
function handleRestartGame() {

}
