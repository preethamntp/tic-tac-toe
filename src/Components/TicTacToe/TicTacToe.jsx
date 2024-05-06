import React, { useRef, useState } from "react";
import "./TicTacToe.css";

// var data = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = "X";
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = "O";
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [0, 1, 2],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c] && data[a]!=="") {
        console.log(data[a]);
        won(data[a]);
      }
    }
    return null;

    /* if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    } */
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congragulation X`;
    } else {
      titleRef.current.innerHTML = `Congragulation O`;
    }
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = "Tic Tac Toe Game";
    box_array.map((e) => {
      return (e.current.innerHTML = "");
    });
  };

  return (
    <div className="container">
      <div>
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => toggle(e, 0)}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => toggle(e, 1)}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => toggle(e, 2)}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => toggle(e, 3)}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => toggle(e, 4)}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => toggle(e, 5)}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => toggle(e, 6)}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => toggle(e, 7)}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => toggle(e, 8)}
            ></div>
          </div>
        </div>
        <div className="button-container">
          <button className="reset" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
