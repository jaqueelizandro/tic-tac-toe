

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
                if (currentPlayer === 'X') {
                    roundWinner = true;
                    keepScoreX++
                    $('h1').text(`The ${currentPlayer} is the WINNER!`)
                    display();
                    break;
                } else {
                    roundWinner = true;
                    keepScoreO++
                    $('h1').text(`The ${currentPlayer} is the WINNER!`)
                    display();
                    break;
                }
            }
        }
        let roundDraw = false;
        if (!currentBoard.includes('')) {
            roundDraw = true;
            keepScoreTie++
            $('h1').text(`DRAW!`)
            display();
        }
        switchPlayers();
        $('.score-x').text(keepScoreX);
        $('.score-o').text(keepScoreO);
        $('.score-tie').text(keepScoreTie);
    };

    const display = function () {
        $('.square').off('click');
        $('.game').addClass('opacity')
        $('button').removeClass('opacity')
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