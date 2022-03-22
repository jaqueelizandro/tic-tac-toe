let currentPlayer = 'X'

const switchPlayers = function () {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
};