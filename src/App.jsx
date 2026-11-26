import { useState } from "react";

function App() {
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    console.log("Click");
    const newValue = [...values];

    if (values[index] !== "") {
      return;
    }

    if (currentPlayer === "X") {
      newValue[index] = "X";
      setCurrentPlayer("O");
    } else {
      newValue[index] = "O";
      setCurrentPlayer("X");
    }

    setValues(newValue);
    winnerCheck(newValue);
  };

  function winnerCheck(board) {
    console.log(board);
    if (board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
      console.log("Winner ", board[0]);
    } else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
      console.log("Winner ", board[3]);
    } else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
      console.log("Winner ", board[6]);
    } else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
      console.log("Winner ", board[0]);
    } else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
      console.log("Winner ", board[1]);
    } else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
      console.log("Winner ", board[2]);
    } else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
      console.log("Winner ", board[0]);
    } else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
      console.log("Winner ", board[2]);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-400 rounded-xl p-4">
        <h1 className="font-bold text-black">Tic-Tac-Toe</h1>

        <div className="flex justify-between mb-4">
          <div className="text-black">Player1 X</div>
          <div className="text-black">Player2 O</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {values.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-20 h-20 bg-gray-200 rounded-lg text-3xl font-bold text-gray-600"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
