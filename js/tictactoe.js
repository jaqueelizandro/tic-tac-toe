


$(document).ready(function() {

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
        for (let i = 0; i < winnerConditions.length; i++) {
            const check = winnerConditions[i];
            if (check[0].text() !== '' && check[0].text() === check[1].text() && check[1].text() === check[2].text()) {
                console.log('end game');
            }
        }
    };

    $('.square1').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square2').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square3').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square4').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square5').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square6').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square7').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square8').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

    $('.square9').click(function () {
        $(this).text(currentPlayer);
        switchPlayers();
        endGame();
    });

});