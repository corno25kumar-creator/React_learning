import { useEffect, useState } from 'react'

function WindowResizer() {
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    const [mobile , isMobile] = useState(false)

    useEffect(()=> {

        if (windowWidth > 640) {
             isMobile(true)
        }else{
            isMobile(false)
        }
      

        const windowfun = ()=>{
          setWindowWidth(window.innerWidth)
       }

      window.addEventListener("resize", windowfun);

    
       return () => {
        window.removeEventListener("resize",windowfun);
       }
    }, [] )


  return (
    <div className= { mobile ? "bg-green-500 flex flex-col items-center  min-h-screen p-4 gap-8" : "bg-red-500 flex flex-col items-center  min-h-screen p-4 gap-8"} >
        <h1 className="text-sm font-bold uppercase tracking-widest text-black-500 mb-2 text-huge">The Window Resizer </h1>
         <h1 className="text-sm font-bold uppercase tracking-widest text-black-500 mb-2 text-huge">The current Window size is {windowWidth}px </h1>
      
    </div>
  )
}

export default WindowResizer
