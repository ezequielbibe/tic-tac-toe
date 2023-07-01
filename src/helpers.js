import { WINNER_COMBOS } from "./constants";

export const checkBoard = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return combo;
    }
  }
  if (boardToCheck.every((box) => box !== null)) {
    return false;
  }
  return null;
};
