document.addEventListener("DOMContentLoaded", function() {
    let startGame = false;
    let gameMode;
    const modes = Array.from(document.getElementsByClassName('mode'));
    modes.forEach(mode => {
        mode.onclick = function (event) {
            gameMode = event.target.id;
            startGame = true;
            document.querySelector('.game').classList.remove('opacity');
            document.querySelector('footer').classList.remove('opacity');
            document.querySelector('.rematch').classList.add('opacity');
        }
    });
    
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
            if (gameMode === 'easy') {
                setTimeout(function(){oponentEasy()}, 600);
            }
            if (gameMode === 'medium') {
                setTimeout(function(){oponentMedium()}, 600);
            }
        } else {
            currentPlayer = 'X'
        }
    };

    const oponentEasy = function () {
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '') {
                currentBoard[i] = 'O';
                currentSquare = document.getElementById('index'+i)
                currentSquare.textContent = currentPlayer;
                checkWinnerAndDraw();
                break;
            }
        }
    }

    const oponentMedium = function () {
        let emptySquares = []
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '') {
                emptySquares.push(i)
            }
        }
        const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        currentBoard[randomSquare] = 'O';
        currentSquare = document.getElementById('index'+randomSquare)
        currentSquare.textContent = currentPlayer;
        checkWinnerAndDraw();
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
            document.querySelector('.rematch').classList.remove('opacity')
        }
        if (roundWinner) {
            document.querySelector('h1').textContent = `${currentPlayer} is the WINNER!`;
            if (currentPlayer === 'X') {
                keepScoreX++
                document.querySelector('.score-x').textContent = keepScoreX;
            } else if (currentPlayer === 'O') {
                keepScoreO++
                document.querySelector('.score-o').textContent = keepScoreO;
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
            if (startGame) {
                const currentSquare = event.target;
                const currentIndex = currentSquare.id.match(/[0-9]/);
                if (!gameOver && currentSquare.textContent === '') {
                    currentSquare.textContent = currentPlayer;
                    currentBoard[currentIndex] = currentSquare.textContent
                    checkWinnerAndDraw();
                }
            }
        }
    });

    const rematch = document.querySelector('.rematch');
    rematch.onclick = function () {
        if (gameOver) {
            gameOver = false;
            currentPlayer = 'X'
            currentBoard = ['', '', '', '', '', '', '', '', '', ]
            document.querySelector('h1').textContent = 'tic tac toe';
            document.querySelector('.rematch').classList.add('opacity')
            squares.forEach(square => {
                square.classList.remove('opacity');
                square.textContent = '';
            });
        }
    };

    const reset = document.querySelector('.reset');
    reset.onclick = function () {
        startGame = false;
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
            square.textContent = '';
        });
    };

    document.onclick = function (event) {
        if (startGame) {
            if (event.detail === 3) {
                document.querySelector('.message').textContent = 'ARE YOU CRAZY?';
                document.querySelector('.game').classList.add('opacity1');
            } if (event.detail === 1) {
                document.querySelector('.message').textContent = '';
                document.querySelector('.game').classList.remove('opacity1');
            }
        }
    };
});