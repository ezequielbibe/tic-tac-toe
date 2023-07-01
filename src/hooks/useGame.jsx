import { useState } from "react";
import { TURNS } from "../constants";
import { checkBoard } from "../helpers";
import confetti from "canvas-confetti";

export const useGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState(null);
  const [winnerPlay, setWinnerPlay] = useState(Array(3).fill(null));

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    setWinnerPlay(Array(3).fill(null));
  };

  const updateBoard = (boardToUpdate, idx) => {
    boardToUpdate[idx] = turn;
    setBoard(boardToUpdate);
    setTurn(turn === TURNS.x ? TURNS.o : TURNS.x);
    return boardToUpdate;
  };

  const checkEndGame = (boardToCheck) => {
    const response = checkBoard(boardToCheck);
    if (response) {
      setWinner(true);
      setWinnerPlay(response);
      confetti();
    }
    if (response === false) setWinner(false);
  };

  return {
    board,
    turn,
    winner,
    winnerPlay,
    restartGame,
    updateBoard,
    checkEndGame,
  };
};
