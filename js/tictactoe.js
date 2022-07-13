document.addEventListener("DOMContentLoaded", function() {
    let currentBoard = ['', '', '', '', '', '', '', '', '', ]
    const winnerConditions = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ],
    ];

    let gameOver = false;
    const checkWinnerAndDraw = function () {
        let gameWinner = false;
        for (let i = 0; i < winnerConditions.length; i++) {
            const zero = winnerConditions[i][0];
            const one = winnerConditions[i][1];
            const two = winnerConditions[i][2];
            if (currentBoard[zero] !== '' && currentBoard[zero] === currentBoard[one] && currentBoard[one] === currentBoard[two]) {
                gameWinner = true;
                gameOver = true;
            }
        }
        let gameDraw = false;
        if (!gameWinner && !currentBoard.includes('')) {
            gameDraw = true;
            gameOver = true;
        }
        displayEndGame(gameDraw, gameWinner);
        if(!gameDraw && !gameWinner) {
            switchPlayers();
        }
    };

    let currentPlayer = 'X';
    const switchPlayers = function () {
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
            setTimeout(function(){oponent()}, 600);
        } else {
            currentPlayer = 'X'
        }
    };

    const oponent = function () {
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '') {
                currentBoard[i] = 'O'
                currentSquare = document.getElementById('index'+i)
                currentSquare.textContent = currentPlayer;
                checkWinnerAndDraw();
                break;
            }
        }
    }

    let keepScoreX = 0;
    let keepScoreO = 0;
    let keepScoreTie = 0;
    const squares = Array.from(document.getElementsByClassName('square'));
    const displayEndGame = function (roundDraw, roundWinner) {
        if (gameOver) {
            squares.forEach(square => {
                square.classList.add('opacity');
            });
        }
        if (roundWinner) {
            if (currentPlayer === 'X') {
                keepScoreX++
                document.querySelector('.score-x').textContent = keepScoreX;
                document.querySelector('h1').textContent = `${currentPlayer} is the WINNER!`;
            } else if (currentPlayer === 'O') {
                keepScoreO++
                document.querySelector('.score-o').textContent = keepScoreO;
                document.querySelector('h1').textContent = `${currentPlayer} is the WINNER!`;
            }
        }
        if (roundDraw) {
            keepScoreTie++
            document.querySelector('.score-tie').textContent = keepScoreTie;
            document.querySelector('h1').textContent = `DRAW!`;
        }
    };

    squares.forEach(square => {
        square.onclick = function (event) {
            const currentSquare = event.target;
            const currentIndex = currentSquare.id.match(/[0-9]/);
            if (!gameOver && currentSquare.textContent === '') {
                currentSquare.textContent = currentPlayer;
                currentBoard[currentIndex] = currentSquare.textContent
                checkWinnerAndDraw();
            }
        }
    });

    const rematch = document.querySelector('.rematch');
    rematch.onclick = function () {
        gameOver = false;
        currentPlayer = 'X'
        currentBoard = ['', '', '', '', '', '', '', '', '', ]
        document.querySelector('h1').textContent = 'tic tac toe';
        squares.forEach(square => {
            square.classList.remove('opacity');
            square.textContent = '';
        });
    };

    const reset = document.querySelector('.reset');
    reset.onclick = function () {
        gameOver = false;
        currentPlayer = 'X'
        keepScoreX = 0;
        keepScoreO = 0;
        keepScoreTie = 0;
        document.querySelector('.score-x').textContent = keepScoreX;
        document.querySelector('.score-o').textContent = keepScoreX;
        document.querySelector('.score-tie').textContent = keepScoreX;
        currentBoard = ['', '', '', '', '', '', '', '', '', ]
        document.querySelector('h1').textContent = 'tic tac toe';
        squares.forEach(square => {
            square.classList.remove('opacity');
            square.textContent = '';
        });
    };

    document.onclick = function (event) {
        if (event.detail === 3) {
            document.querySelector('.message').textContent = 'ARE YOU CRAZY?';
            document.querySelector('.game').classList.add('opacity');
        } if (event.detail === 1) {
            document.querySelector('.message').textContent = '';
            document.querySelector('.game').classList.remove('opacity');
        }
    };
});