import { useState } from "react";
import { useCounter } from "../useCounter";

function Third() {
  const [input, setInput] = useState("");
  const { setByValue } = useCounter();

  const handleSetValue = () => {
    const num = Number(input);
    if (!isNaN(num)) {
      setByValue(num);
      setInput("");
    }
  };

  return (
    <div className="w-72 h-44 flex items-center justify-center bg-gray-100">
      <div className="w-72 h-44 bg-linear-to-br from-green-500 to-teal-600 
                      rounded-2xl shadow-xl flex flex-col items-center justify-center
                      gap-3 text-white hover:scale-105 transition-all">

        <h1 className="text-xl font-bold">Set Value</h1>

        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number"
          className="px-3 py-1 rounded text-black outline-none w-40"
        />

        <button
          onClick={handleSetValue}
          className="px-5 py-2 bg-white text-green-600 font-semibold 
                     rounded-full shadow-md hover:bg-green-100 transition-all"
        >
          Set Value
        </button>
      </div>
    </div>
  );
}

export default Third;
