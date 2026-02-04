//import Fetch from "./Axios/FetchUsers"
//import AxiosUse from "./Axios/AxiosUse"
// import Appto from './hooks/useEffect/useEffect'
// import DataFetch from './hooks/useEffect/dataFetch'
// import WindowResizer from './hooks/useEffect/windowResizer'
// import InputFocus from './hooks/useRef/inputFocus'
// import GetPost from "./Axios/GetPost"
 //import { setLoader } from "./Axios/loader";
// import { useState, useEffect } from "react";
// import NewsPage from "./components/NewsPage"
// import {setLoader} from './contextapi/api/contextloader'
// import GlobalLoader from "./components/GlobalLoader";
// import { NewsProvider } from './contextapi/context/NewsContext.jsx'
//import MainZustand from "./zustand/MainZustand"

//import MainCustomeHook from "./hooks/coustomhook/MainCustomeHook"
//import MainLifeCycle from "./lifecycle/MainLifeCycle"
//import MainMemo from "./hooks/memo/MainMemo"
// import MainUseMemo from './hooks/useMemo/MainUseMemo'
//import MainHocCusHook from "./higherorderfuction/MainHoc"
import MainCallBack from "./hooks/useCallback/MainCallBack"
import Practice from "./hooks/useEffect/pratice"

function App() {
  //   const [loading, setLoading] = useState(false);

  //  useEffect(() => {
  //    setLoader(setLoading);
  //  }, []);
  return (
    <>
       {/* {loading &&  (<GlobalLoader/>)} */}
      {/* <GetPost /> */} 
       {/* <NewsProvider>
         <NewsPage/>
          </NewsProvider> 
          <MainZustand/>
            <MainHocCusHook/>
            <MainCustomeHook/>
            <MainLifeCycle/>
             <MainUseMemo/>
             <MainMemo/>
              <MainCallBack/>
  */}

   <Practice/>
      
     


       
    </>
  )
}

export default App
