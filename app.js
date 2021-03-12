


const addNameElement = document.getElementById('getInput');
const container = document.querySelector('.container');

function startGame() {
    const typedNameOne = document.getElementById('player-1-name').value;
    const typedNameTwo = document.getElementById('player-2-name').value;
    
    player1 = {
        name: typedNameOne,
        sign: 'X'
    }

    player2 = {
        name: typedNameTwo,
        sign: 'O'
    }

    currentPlayer = player1;

    container.classList.toggle('visible');
}

addNameElement.addEventListener('click', startGame);


let player1;
let player2;

let currentPlayer




let game = (() => { 

    gameState = ['', '', '', '', '', '', '', '', ''];

 
    const cellElement = document.querySelectorAll('.cell');
    const gameStatus = document.getElementById('game--status')
    const restartElement = document.getElementById('game--restart')


    function handleCellPlayed(e) {
        let index = e.target.id
        if (!gameState[index]) {
            gameState[index] = currentPlayer.sign
            e.target.innerHTML = currentPlayer.sign;
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
                alert(`Winner is ${currentPlayer.name}`)
            }  else if (!gameState.includes('')) {
                alert("It's a draw");
            } else handlePlayerChange()
            updateGameStatus();
    }

  


    function handlePlayerChange() {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }


    function handleRestartGame() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = player1;
        cellElement.forEach(x => x.innerHTML = '');
        gameStatus.innerHTML = `${currentPlayer.name}'s turn`;
    }


    function updateGameStatus() {
        gameStatus.innerHTML = `${currentPlayer.name}'s turn`;
    }

    cellElement.forEach(x => x.addEventListener('click', function(e){
        handleCellPlayed(e);
    }))

    restartElement.addEventListener('click', handleRestartGame);

})();



  /*
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
    */