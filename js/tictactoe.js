

$(document).ready(function() {

    let currentPlayer = 'X'

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

    let keepScoreX = 0;
    let keepScoreO = 0;
    let keepScoreTie = 0;

    const endGame = function () {
        for (let i = 0; i < winnerConditions.length; i++) {
            const check = winnerConditions[i];
            if (check[0].text() !== '' && check[0].text() === check[1].text() && check[1].text() === check[2].text()) {
                if (currentPlayer === 'X') {
                    keepScoreX++
                } else {
                    keepScoreO++
                }
            }
        }



        $('.score-x').text(keepScoreX)
        $('.score-o').text(keepScoreO)
        $('.score-tie').text(keepScoreTie)
        switchPlayers();
    };

    $('button').on('click', function () {
        $('table tr td').text('')
    });

    $('.square1').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square2').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square3').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square4').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square5').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square6').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square7').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square8').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

    $('.square9').on('click', function () {
        $(this).text(currentPlayer);
        endGame();
    });

});