

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
            $('.square').off('click');
            $('.game').addClass('opacity');
            $('button').removeClass('opacity');
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
        $('h1').text('tic tac toe')
        $('.square').on('click', function () {
            $(this).text(currentPlayer);
            $(this).off('click');
            const index = $(this).index()
            currentBoard[index] = currentPlayer
            endGame();
        });
        $('.game').removeClass('opacity')
        $('button').addClass('opacity')
        $('.square').text('');
    };

    $('.square').on('click', function () {
        $(this).text(currentPlayer);
        $(this).off('click');
        const index = $(this).index()
        currentBoard[index] = currentPlayer
        endGame();
    });

    $('button').on('click', function () {
        restartGame();
    });

});