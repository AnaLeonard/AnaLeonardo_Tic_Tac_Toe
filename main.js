/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
let win1 = 0;
let win2 = 0;


// const playerName1 = 'X';
// const playerName2 = 'O';


/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
function init() {
    
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    document.addEventListener("DOMContentLoaded", function () {
        const nameForm = document.getElementById("nameForm");

        nameForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const playerName1 = document.getElementById("playerName1").value;
            const playerName2 = document.getElementById("playerName2").value;

            alert(`Welcome, ${playerName1} and ${playerName2}! Let's start the game.`);

        });
    });
    render();

};

function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}



function handleTurn() {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;
    if (turn === 'X') {
        turn = "O"
    } else {
        turn = 'X'
    };

    win = getWinner();
    render();

};
function render() {
    board.forEach(function (mark, index) {
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
    });
    if (win === 'T') {
        messages.textContent = `That's a tie, try again!`
    } 
    else if (win) {
        messages.textContent = `${win} wins the game!`
        if (win === 'X') {
            // alert("Player X won " + win1 + " times")
            win1++;
            console.log('X wins : ' + win1);
            if (win1 === 6) {
                console.log('X wins 3 times: ' + win1);
                alert("WON 3 TIMES PLAYER X");

            }
        }
        else if (win === 'O'){
            // alert("Player O won " + win2 + " times")

            win2++;
            console.log('X wins : ' + win2);

            if (win2 === 6) {
                console.log('O wins 3 times: ' + win2);
                alert("WON 3 TIMES PLAYER O");


                
            }
        }
        else{
            console.log('none');
        }
    } 
    else {
        messages.textContent = `It's ${turn}'s turn!`
    }
    //messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};


function getWinner() {
    let winner = null;
    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });

    if (winner) {
        return winner
    } else if (board.includes('')) {
        return null // if there's an empty space, return null (no winner yet)
    } else {
        return 'T' // no winner and no empty spaces? That's a tie!
    }
    // return winner ? winner : board.includes('') ? null : 'T';

};





init();
