//import Fetch from "./Axios/FetchUsers"
//import AxiosUse from "./Axios/AxiosUse"
// import Appto from './hooks/useEffect/useEffect'
// import DataFetch from './hooks/useEffect/dataFetch'
// import WindowResizer from './hooks/useEffect/windowResizer'
// import InputFocus from './hooks/useRef/inputFocus'
import GetPost from "./Axios/GetPost"
import { setLoader } from "./Axios/loader";
import { useState, useEffect } from "react";

function App() {
   const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoader(setLoading);
  }, []);
  return (
    <>
       {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white px-6 py-3 rounded shadow text-lg font-semibold">
            Loading...
          </div>
        </div>
      )}
      <GetPost />
   
    </>
  )
}

export default App
