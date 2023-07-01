import React from "react";
import { TURNS } from "../constants";

export const Square = ({ box, index, winner, winnerPlay, handleCheck }) => {
  const activeX = box === TURNS.x ? "turnX-active " : "";
  const activeO = box === TURNS.o ? "turnO-active " : "";
  const offBox = winner !== null && box === null ? "off " : "";
  const loserBox = winner !== null && winnerPlay.every((box) => box !== index) ? "lose " : "";
  const winnerBox = winner !== null && winnerPlay.some((box) => box === index) ? "win" : "";

  return (
    <div
      onClick={() => handleCheck(index)}
      className={`table-box ${activeX}${activeO}${offBox}${loserBox}${winnerBox}`}
    >
      <span>{box}</span>
    </div>
  );
};
