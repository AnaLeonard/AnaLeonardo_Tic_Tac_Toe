function App() {
  return (
    <div>
      <h1>Tic-React-Toe</h1>
      <h1>Tic-Tac-Toe</h1>
      <h2>It's X's turn!</h2>

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

        <input type="submit" value="Start Game" />
      </form>

      <div className="flex-container flex-column">
        <div className="flex-container flex-wrap" id="board">
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
          <div className="square" style={{ backgroundColor: "paleturquoise" }}></div>
        </div>
        <button id="reset-button" style={{ backgroundColor: "paleturquoise" }}>reset</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);
