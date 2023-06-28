import { useState } from 'react'
import './App.css'

const TURNS = {
  x: '❌',
  o: '🟠',  
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const handleCheck = (index) => {
    if(board[index] !== null) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(turn === TURNS.x ? TURNS.o : TURNS.x)
  }
  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1>Tic Tac Toe</h1>
        <span>Turnos de: <strong>{turn}</strong></span>
        <button onClick={restartGame}>Empezar de nuevo</button>
      </header>
      <section className='table'>
        {board.map((box, index)=> 
          <div key={index} className='table-box' onClick={()=> handleCheck(index)}>
            <strong>{box}</strong>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
