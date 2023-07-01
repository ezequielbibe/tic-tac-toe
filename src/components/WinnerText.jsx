import React from "react";

export const WinnerText = ({ winner }) => {
  if (winner === null) return;

  return (
    <>
      {winner === true && <span>WIN</span>}
      {winner === false && <span>EMPATE</span>}
    </>
  );
};
