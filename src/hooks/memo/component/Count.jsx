import { useState, useMemo } from 'react'

function Count() {
  const [data, setData] = useState(0)

  const heavy = () => {
    let total = 0
    for (let i = 0; i < 200; i++) {
      total += i
    }
    return total
  }

  const result = useMemo(() => {
    console.log("Heavy calculation running...")
    return heavy()
  }, [])  // runs only once

  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-64 space-y-3">
      <h2 className="font-bold text-lg">useMemo Example</h2>

      <p>Count: {data}</p>
      <p>Heavy Result: {result}</p>

      <button 
        onClick={() => setData(data + 1)}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Click
      </button>
    </div>
  )
}

export default Count
