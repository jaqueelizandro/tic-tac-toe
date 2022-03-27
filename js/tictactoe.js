$(document).ready(function() {

    let currentPlayer = 'X';

    let gameOver = false;

    let keepScoreX = 0;
    let keepScoreO = 0;
    let keepScoreTie = 0;

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
        switchPlayers();
    };

    const switchPlayers = function () {
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    };

    const displayEndGame = function (roundDraw, roundWinner) {
        if (gameOver) {
            $('.square').addClass('opacity');
        }
        if (roundWinner) {
            if (currentPlayer === 'X') {
                keepScoreX++
                $('.score-x').text(keepScoreX);
                $('h1').text(`${currentPlayer} is the WINNER!`)
            } else if (currentPlayer === 'O') {
                keepScoreO++
                $('.score-o').text(keepScoreO);
                $('h1').text(`${currentPlayer} is the WINNER!`)
            }
        }
        if (roundDraw) {
            keepScoreTie++
            $('.score-tie').text(keepScoreTie);
            $('h1').text(`DRAW!`)
        }
    };

    const resetGame = function () {
        gameOver = false;
        currentPlayer = 'X'
        currentBoard = ['', '', '', '', '', '', '', '', '', ]
        $('h1').text('tic tac toe');
        $('.square').removeClass('opacity')
        $('.square').text('');
    };

    const play = function (square) {
        const $currentSquare = $(square.target);
        const $currentIndex = $currentSquare.index();
        if (!gameOver && $currentSquare.text() === '') {
            $currentSquare.text(currentPlayer);
            currentBoard[$currentIndex] = ($currentSquare.text())
            checkWinnerAndDraw();
        }
    };

    $('.square').on('click', play)

    $('.restart').on('click', resetGame);

    $(document).on('click', function (event) {
        if (event.detail === 3) {
            $('.message').text('ARE YOU CRAZY?');
            $('.game').addClass('opacity');
        } if (event.detail === 1) {
            $('.message').text('');
            $('.game').removeClass('opacity');
        }
    });

});