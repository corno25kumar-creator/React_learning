import { useState, useEffect } from "react";

function Practice() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const countfun = () => {
    setCount(prev => prev + 1);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-8">
      <h1 className="text-sm font-bold uppercase tracking-widest text-blue-500">
        counter and timer project
      </h1>

      {/* Counter */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">
          Counter Hook
        </h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Current Count: <span className="text-blue-600">{count}</span>
        </h1>
        <button
          onClick={countfun}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Click Me!
        </button>
      </div>

      {/* Timer */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md border-t-4 border-blue-500">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">
          Timer
        </h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Time: <span className="text-blue-600">{time}s</span>
        </h1>
        <button
          onClick={() => setIsRunning(prev => !prev)}
          className={`px-6 py-3 text-white font-semibold rounded-lg ${
            isRunning ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isRunning ? "Stop Time" : "Start Time"}
        </button>
      </div>
    </div>
  );
}

export default Practice;
