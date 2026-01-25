import React, { useEffect, useState } from 'react'

function Alpha() {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log("Alpha rerendered hogaya");

    //     return()=>{
    //         console.log("Unmounting  aplha comnpoenent")
    //     }
    // },[count])
    
    useEffect(()=>{
        console.log("mounting from 2 use effect")
        return()=>{
            console.log("Unmounting  aplha comnpoenent")
        }
    },[])

     const increment = () => {
          setCount(count + 1);
    };

  return (
    <div className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
         <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Count</h2>
          <div className="text-4xl font-bold">{count}</div>
          <button
            onClick={increment}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Increment
          </button>
        </div>
      
    </div>
  )
}

export default Alpha
