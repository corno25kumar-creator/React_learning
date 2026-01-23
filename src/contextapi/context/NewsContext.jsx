import { createContext , useContext, useState } from "react";
import axiosInstanceConig from "../api/axiosInstanceFile";


const NewContext = createContext();   // global pipe through data flow 

export const NewsProvider = ({children})=> {

    const [news, setNews] = useState([])

    const fetchNews = async () => {

        try {
            const res = await axiosInstanceConig.get('/posts');
            const newsWithImage = res.data.posts.map(post => ({
            ...post,
            image: `https://picsum.photos/400/250?random=${post.id}`
        }));
          setNews(newsWithImage);

        } catch (error) {
            console.error("error occur when adding data into the context :- ", error)
        }
       
    }

    return(
          <NewContext.Provider value={{news, fetchNews}}>
            {children}
          </NewContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useNews = () => useContext(NewContext)