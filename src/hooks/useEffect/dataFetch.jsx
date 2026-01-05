import { useEffect, useState } from "react"

function DataFetch() {

    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
 
    useEffect(()=> {
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(res => {
            setData(res.products)
            setLoading(false)
        })
    },[])
    
  return (
   <div className="p-10 bg-gray-100 min-h-screen ">
    <h1 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">data fetching project</h1>
            {loading ? (
                <h1 className="text-2xl font-bold">Loading...</h1>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map(ele => (
                        <li key={ele.id} className="p-4 bg-white rounded shadow list-none">
                            <img src={ele.thumbnail} alt={ele.title} className="w-20 h-20 mb-2" />
                            <h2 className="font-bold">{ele.title}</h2>
                            <p className="text-sm text-gray-500">{ele.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
  )
}

export default DataFetch
