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



/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);


/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();

};

function handleTurn(event) {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    board[idx] = turn;
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    };
    render();

};

function render() {
    board.forEach(function (mark, index) {
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`;

};
function getWinner() {
    // just stub it up for now.
}

init();
