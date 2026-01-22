import { useState } from "react"

function FetchUsers() {
  const [UserData , setUserData] = useState([])
   
    const dataFetch = async () => {

      // async awaait
       try {
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        setUserData(data)
       } catch (error) {
        console.error("something is wrong with fetching data of user",error)
       }
    
    }
  

  return (
    <div>
        <h1 className='bg-amber-400'>for data fetching click! btn</h1>
      <button onClick={dataFetch} className='w-content h-content bg-amber-800 text-amber-50'>Click! me</button>
      <div>{UserData.map((data, ele) => (
        <li key={ele}>{data.name}</li>
      ))}</div>
    </div>
  )
}


export default FetchUsers
