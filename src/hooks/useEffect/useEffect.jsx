import { useEffect, useState } from "react";

function Appto() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true); 

  useEffect(() => {
   let interval;
   
   if (isRunning) {
    interval =   setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    
   }
  
   
    return () => {
        clearInterval(interval)
    }
    
  }, [isRunning]);


  const countfun = () => {
     setCount(count + 1)
  }
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-8">
       <h1 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">counter and timer project</h1>
     
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">
          Counter Hook
        </h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Current Count: <span className="text-blue-600">{count}</span>
        </h1>
        <button
          onClick={countfun}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md"
        >
          Click Me!
        </button>
      </div>

        <h1>Hello this this the container section</h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-full max-w-md border-t-4 border-blue-500">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">
          Timer
        </h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Time: <span className="text-blue-600">{time}s</span>
        </h1>
        <button 
          onClick={() => setIsRunning(!isRunning)} 
          className={`px-6 py-3 text-white font-semibold rounded-lg transition-all shadow-md ${
            isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Stop Time" : "Start Time"}
        </button>
      </div>
      
    </div>
  );
}

export default Appto;
