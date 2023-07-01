import React from "react";

export const Header = ({ turn, restartGame }) => {
  return (
    <header className="header">
      <h1>Ta Te Ti</h1>
      <strong>TURN: {turn}</strong>
      <button onClick={restartGame}>
        <strong>RESTART GAME</strong>
      </button>
    </header>
  );
};
