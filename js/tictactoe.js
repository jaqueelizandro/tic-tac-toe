

$(document).ready(function() {

    let currentPlayer = 'X';

    let currentBoard = ['', '', '', '', '', '', '', '', '', ];

    let keepScoreX = 0;
    let keepScoreO = 0;
    let keepScoreTie = 0;

    const switchPlayers = function () {
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    };

    const winnerConditions = [
        [ $('.square1'), $('.square2'), $('.square3') ],
        [ $('.square4'), $('.square5'), $('.square6') ],
        [ $('.square7'), $('.square8'), $('.square9') ],
        [ $('.square1'), $('.square4'), $('.square7') ],
        [ $('.square2'), $('.square5'), $('.square8') ],
        [ $('.square3'), $('.square6'), $('.square9') ],
        [ $('.square1'), $('.square5'), $('.square9') ],
        [ $('.square3'), $('.square5'), $('.square7') ],
    ];

    const endGame = function () {
        let roundWinner = false;
        for (let i = 0; i < winnerConditions.length; i++) {
            const check = winnerConditions[i];
            if (check[0].text() !== '' && check[0].text() === check[1].text() && check[1].text() === check[2].text()) {
                roundWinner = true;
            }
        }
        let roundDraw = false;
        if (!roundWinner && !currentBoard.includes('')) {
            roundDraw = true;
        }
        display(roundDraw, roundWinner);
        switchPlayers();
    };

    const display = function (roundDraw, roundWinner) {
        if (roundDraw || roundWinner) {
            $('.square').removeClass('square');
            $('.game').addClass('opacity');
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

    const restartGame = function () {
        currentBoard = ['', '', '', '', '', '', '', '', '', ]
        currentPlayer = 'X'
        $('h1').text('tic tac toe');
        $('.board').addClass('square')
        $('.game').removeClass('opacity')
        $('.square').text('');
        $('.message').text('')
    };

    const game = function (square) {
        const $currentSquare = $(square.target);
        $currentSquare.text(currentPlayer);
        $currentSquare.removeClass('square');
        const index = $currentSquare.index();
        currentBoard[index] = currentPlayer;
        endGame();
    };

    $('.square').on('click', game)

    $('.restart').on('click', restartGame);

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