const gameboard = {
    gameField: ['X', 'O', 'X', 'O', 'X', 'X', 'X', 'O', 'X'],
}

const player = (name, sign) => {
    
    let playerName = name;
    let playerSign = sign;
    
    return {playerName, playerSign} 
};


function renderChoices () {
const fieldElements = document.querySelectorAll('.gameboard-field');
let i = 0;

fieldElements.forEach(x => {
    x.textContent = gameboard.gameField[i]
    i++
}); 

}

renderChoices()




