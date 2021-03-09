const boardContainerElement = document.getElementById('gameboard-container')


// Gameboard

const gameboard = {
    gameField: ['', '', '', '', '', '', '', '', ''],
}


//Player factory

const Player = (name, sign) => {
    
    const getName = () => name;
    let getSign = () => sign;
    
    // Add Marks on field


    function addMark (e) {
        if (e.target != e.currentTarget) {
            let position = e.target.id;
            let fieldChoice = gameboard.gameField
                if(!fieldChoice[position])
                    fieldChoice[position] = sign;
        }
        renderChoices();
        }



    return {addMark, getName, getSign} 
};


// Update choices on the screen


function renderChoices () {
    const fieldElements = document.querySelectorAll('.gameboard-field');


    let i = 0;

    fieldElements.forEach(x => {
        x.textContent = gameboard.gameField[i]
        i++
    }); 
}

renderChoices();



const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

boardContainerElement.addEventListener('click', player2.addMark);





