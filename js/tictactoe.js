

$(document).ready(function() {

    const $square = $('.square');

    let currentPlayer = 'X';

    let gameOver = false;

    let keepScoreX = 0;
    let keepScoreO = 0;
    let keepScoreTie = 0;

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

    const switchPlayers = function () {
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
    };

    const checkEndGame = function () {
        let roundWinner = false;
        for (let i = 0; i < winnerConditions.length; i++) {
            const check = winnerConditions[i];
            if (check[0].text() !== '' && check[0].text() === check[1].text() && check[1].text() === check[2].text()) {
                roundWinner = true;
                gameOver = true;
            }
        }
        let roundDraw = false;
        if (!roundWinner && $square.text().length === 9) {
            roundDraw = true;
            gameOver = true;
        }
        display(roundDraw, roundWinner);
        switchPlayers();
    };

    const display = function (roundDraw, roundWinner) {
        if (gameOver) {
            $square.addClass('opacity');
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
        $('h1').text('tic tac toe');
        $square.removeClass('opacity')
        $square.text('');
    };

    const play = function (square) {
        const $currentSquare = $(square.target);
        if (!gameOver && $currentSquare.text() === '') {
            $currentSquare.text(currentPlayer);
            checkEndGame();
        }
    };

    $square.on('click', play)

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