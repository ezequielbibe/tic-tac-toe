import { Square, WinnerText, Header } from "./components/index";
import { useGame } from "./hooks/useGame";
import "./App.css";

function App() {
  const {
    board,
    turn,
    winner,
    winnerPlay,
    restartGame,
    updateBoard,
    checkEndGame,
  } = useGame();

  const handleCheck = (index) => {
    if (winner !== null || board[index] !== null) return;
    const newBoard = updateBoard([...board], index);
    checkEndGame(newBoard);
  };

  return (
    <div className="App">
      <Header turn={turn} restartGame={restartGame} />
      <section className="table">
        {board.map((box, index) => (
          <Square
            key={index}
            box={box}
            index={index}
            winner={winner}
            winnerPlay={winnerPlay}
            handleCheck={handleCheck}
          />
        ))}
      </section>
      <WinnerText winner={winner} />
    </div>
  );
}

export default App;
