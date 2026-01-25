import {  useEffect, useState } from 'react';
import Alpha from './components/Alpha';

function LifeCycle() {
  //const [count, setCount] = useState(0);
 // const [data, setData] = useState(0);
  const [toggle, setToggle] = useState(false)

/// mounting 
  useEffect(() => {
    console.log("mounting Component rendered...");
  },[]);

// // updating 
//  useEffect(() => {
//     console.log("data  change ho gaya...");
//   },[data]);

//  useEffect(() => {
//     console.log("count  change ho gaya...");
//   },[count]);
  
//   const decrement = () => {
//     setData(data - 1);
//   };

//   const increment = () => {
//     setCount(count + 1);
//   };

const show = () =>{
    toggle ? setToggle(false):setToggle(true)
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center gap-6">

        <h1 className="text-3xl font-bold text-indigo-600">
          React Lifecycle Demo
        </h1>

        {toggle && ( <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-green-600">Aplha component</div>
            <Alpha/>
        </div>)}

        {/* Count Section */}
        {/* <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Count</h2>
          <div className="text-4xl font-bold text-green-600">count</div>
          <button
            //onClick={increment}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>
        </div>

        <div className="w-full h-px bg-gray-300"></div>

        {/* Data Section */}
        {/* <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Data</h2>
          <div className="text-4xl font-bold text-red-500">data</div>
          <button */}
          {/* //  onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div> */} 

         <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">show</h2>
          <div className="text-4xl font-bold text-red-500">show</div>
          <button
           onClick={show}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            show child component
          </button>
        </div>

      </div>
    </div>
  );
}

export default LifeCycle;
