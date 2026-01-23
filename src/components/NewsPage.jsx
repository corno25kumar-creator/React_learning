import {useEffect} from 'react'
import { useNews } from '../contextapi/context/NewsContext'

function NewsPage() {
 
    const {news, fetchNews} = useNews()

    useEffect(()=>{
        fetchNews()
    }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {news.map(item => (
        <div key={item.id} className="bg-white shadow rounded overflow-hidden">
          <img src={item.image} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsPage
