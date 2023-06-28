import { useState } from 'react'
import { TURNS } from './constants'
import './App.css'

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
    setTurn(TURNS.x)
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1>Ta Te Ti</h1>
        <strong>TURN: {turn}</strong>
        <button onClick={restartGame}><strong>RESTART GAME</strong></button>
      </header>
      <section className='table'>
        {board.map((box, index)=> 
          <div key={index} className={`table-box ${box === TURNS.x && "turnX-active"} ${box === TURNS.o && "turnO-active"}`} onClick={()=> handleCheck(index)}>
            <span>{box}</span>
          </div>
        )}
      </section>
    </div>
  )
}

export default App
