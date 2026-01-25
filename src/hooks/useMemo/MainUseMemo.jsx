import {  useEffect, useState } from 'react'
import Alpha from './component/Alpha'

function MainUseMemo() {

  const [count, setCount] = useState(0)

  const [obj, setObj] = useState({
    name:"chandan"
  })

  useEffect(()=>{
    console.log("parent rendered ho raha hai")
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-96 rounded-xl shadow-xl p-6 space-y-5">

        <h2 className="text-2xl font-bold text-center text-indigo-600">
          useMemo Demo UI
        </h2>

        {/* Child Component */}
        <div className="border rounded-lg p-3 bg-gray-50">
          <Alpha obj={obj.name} />
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium">Enter your name</label>
          <input 
            value={obj.name}
            onChange={(e) => setObj({...obj, name: e.target.value})}
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 border rounded-lg outline-none 
                       focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <span className="font-semibold text-gray-700">
            Count: <span className="text-indigo-600">{count}</span>
          </span>

          <button 
            onClick={() => setCount(count + 1)}
            className="px-5 py-2 bg-green-500 text-white rounded-lg 
                       hover:bg-green-600 transition font-semibold"
          >
            Add!
          </button>
        </div>

      </div>
    </div>
  )
}

export default MainUseMemo
