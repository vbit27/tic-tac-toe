// Gameboard

const gameboard = {
    gameField: ['X', 'O', 'X', 'O', 'X', 'X', 'X', 'O', 'X'],
}


//Player factory

const player = (name, sign) => {
    
    let playerName = name;
    let playerSign = sign;
    
    return {playerName, playerSign} 
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


// Add Marks on field

const boardContainerElement = document.getElementById('gameboard-container')

function addMark (e) {
    if (e.target != e.currentTarget) {
        let position = e.target.id;
        console.log(position)
        gameboard.gameField[position] = 'X';
    }
    renderChoices();

}

boardContainerElement.addEventListener('click', addMark);







