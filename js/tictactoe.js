

$(document).ready(function() {

    let currentPlayer = 'X'

    let currentBoard = ['', '', '', '', '', '', '', '', '', ]

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
            if (currentBoard.includes('')) {
                continue;
            }
            if (check[0].text() === check[1].text() && check[1].text() === check[2].text()) {
                roundWinner = true;
                $('h1').text(`there is the WINNER!`)
                break;
            }
        }
        let roundDraw = false;
        if (!currentBoard.includes('')) {
            roundDraw = true;
            $('h1').text(`blablalba`)
        }
        switchPlayers();
    };

    const restartGame = function () {
        currentBoard = ['', '', '', '', '', '', '', '', '', ]
        currentPlayer = 'X'
        $('h1').text('tic tac toe')
        $('.square').on('click');
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