import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useState } from "react";
import Button from "@mui/material/Button";

export function TicTacToe() {
  const { width, height } = useWindowSize();

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXturn, setIsXturn] = useState(true);
  const winConds = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const decideWinner = () => {
    for (let i = 0; i < winConds.length; i++) {
      const [a, b, c] = winConds[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("The winner is " + board[a], a, b, c);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner();

  const handleClick = (index) => {
    console.log("Player Clicked", index);
    if (board[index] === null && winner === null) {
      const copyBoard = [...board];
      copyBoard[index] = isXturn ? "X" : "O";
      setIsXturn(!isXturn);
      setBoard(copyBoard);
    }
  };

  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXturn(true);
  };

  return (
    <div className="tic-tac-toe">
      {winner ? <Confetti width={width} height={height} gravity={0.5} /> : null}
      <h1>🌟Tic Tac toe🌟</h1>
      <div className="full-game"></div>
      {/* <div className="winning-line"></div> */}
      <div className="board">
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Button onClick={reset}>RESET🔃</Button>
      {winner ? <h2>The Winner is : {winner} </h2> : null}
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  //   const [val, setVal] = useState(null);
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div className="game-box" style={styles} onClick={() => onPlayerClick()}>
      {val}
    </div>
  );
}
