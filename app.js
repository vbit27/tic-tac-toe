"use strict";

const Player = (sign) => {
    this.sign = sign;

    getSign() = () => {
        return sign;
    }

    return { getSign }
}


const boardGame = (() => {

    let board = ["", "", "", "", "", "", "", "", ""];
 
    const setField = (index, sign) => {
        board[index] = sign;
    };

    const getIndex = (index) => {
        return board[index];
    };

    const reset = () => {
        for (let i=0; i < board.length; i++) {
            board[i] = '';
        }
    };

    return { setField, getIndex, reset}

})();