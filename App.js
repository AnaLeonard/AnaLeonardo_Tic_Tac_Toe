function App() {
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
  const [gameOver, setGameOver] = React.useState(false);
  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = React.useState('X');
  let win;

  function handleTurn(event) {
    console.log(event.target, event.target.id);
    let idx = event.target.id;
    if (!gameOver && board[idx] === "") {
      let newBoard = [...board];
      newBoard[idx] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');

      // win = getWinner()
      // render()
    }
  }

  return (

    <div>
      <h1>Tic-Tac-Toe</h1>
      <h2>It's {turn} turn!</h2>

      <form id="nameForm">
        <label htmlFor="playerName1" style={{ position: "absolute", top: "10%", left: "5%", width: "20%" }}>
          Player X Name:
        </label>
        <input type="text" id="playerName1" required style={{ position: "absolute", top: "15%", left: "5%", width: "20%" }} />

        <img
          src="https://media4.giphy.com/media/Tki7sWHDoepb2/giphy.gif?cid=ecf05e474dmpluprxb23hsx0dkxmy5kk59hniupzhpmpw9d2&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Street fighter character"
          style={{ position: "absolute", top: "20%", left: "5%", height: "400px", width: "300px" }}
        />

        <label htmlFor="playerName2" style={{ position: "absolute", top: "10%", right: "5%", width: "20%" }}>
          Player O Name:
        </label>
        <input type="text" id="playerName2" required style={{ position: "absolute", top: "15%", right: "5%", width: "20%" }} />

        <img
          src="https://media.tenor.com/q5hJKqcR0xwAAAAC/streetfighter-street.gif"
          alt="Street fighter character"
          style={{ position: "absolute", top: "20%", right: "5%", height: "400px", width: "300px" }}
        />

      </form>
      <div class="flex-container flex-column">
        <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
          {board.map((value, idx) => {
            return (
              <div class="square" key={idx} id={idx}>
                {value}
              </div>
            )
          })}
        </div>
        <button id="reset-button">reset</button>

      </div>
    </div>
  );
}


ReactDOM.render(<App />, root);