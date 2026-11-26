import { useState } from "react";

function App() {
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleClick = (index) => {
    const newValue = [...values];

    if (winner !== "") {
      return;
    }

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
    if (board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
      setWinner(board[0]);
    } else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
      setWinner(board[3]);
    } else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
      setWinner(board[6]);
    } else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
      setWinner(board[0]);
    } else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
      setWinner(board[1]);
    } else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
      setWinner(board[2]);
    } else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
      setWinner(board[0]);
    } else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
      setWinner(board[2]);
    }
  }

  const handleRematch = () => {
    setValues(["", "", "", "", "", "", "", "", ""]);
    setCurrentPlayer("X");
    setWinner("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-gray-400 rounded-xl p-4">
        <h1 className="font-bold text-black">Tic-Tac-Toe</h1>

        <div className="flex justify-between mb-4 ">
          <div
            className={` text-black p-4 ${currentPlayer === "X" ? "border border-amber-400" : ""}`}
          >
            Player1 X
          </div>
          <div
            className={` text-black p-4 ${currentPlayer === "O" ? "border border-amber-400 " : ""}`}
          >
            Player2 O
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {values.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-40 h-40 bg-gray-200 rounded-lg text-3xl font-bold text-gray-600"
            >
              {value}
            </button>
          ))}
        </div>

        {winner !== "" && (
          <div className="absolute inset-0">
            <div className="bg-black/80 p-8 flex flex-col justify-center items-center rounded-xl text-center shadow-lg w-full h-full ">
              <h1 className="text-3xl font-bold text-black">Game Over</h1>

              <h2 className="text-2xl font-semibold text-green-600 mt-2">
                Player {winner === "X" ? "Player 1" : "Player 2"} won!
              </h2>

              <button
                onClick={handleRematch}
                className="border border-amber-400 text-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)] px-6 py-2 rounded-lg mt-2 cursor-pointer hover:bg-amber-400 hover:text-black transition-all duration-300 ease-in-out hover:scale-110"
              >
                Rematch
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
