import {useState} from 'react'

function Parent() {

     const[count , setCount] = useState(0)

   

  return (
    <div className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
         <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Count</h2>
          <div className="text-4xl font-bold">{count}</div>
          <button
            onClick={()=>{setCount(count+1)}}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Increment
          </button>
        </div>
      
    </div>
  )
}

export default Parent
