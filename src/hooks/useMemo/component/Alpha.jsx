import { memo, useEffect } from 'react'

function Alpha({obj}) {

    useEffect(()=>{
        console.log("child rendere ho gya hai")
    })

  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
      Alpha
       <span className="font-semibold text-gray-700">
            Count: <span className="text-indigo-600">{obj}</span>
          </span>
      
    </div>
  )
}

const UpgradeComponent = memo(Alpha,(prev, next)=>{
  console.log(prev)
  console.log(next)
})

export default UpgradeComponent
