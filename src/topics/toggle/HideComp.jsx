import React, { useState } from 'react'

function HideComp() {

    const [isVisibe, setIsVisible] = useState(true)


    const HideShow = () => {
       setIsVisible(prev => !prev)
    }
  return (
    <div >

      <h1 className='pb-2 text-2xl font-bold'>hide content on click</h1>

      {isVisibe && (
            <p>Lorem ipsum dolor sit am coetur adipisicing. Harum,  aliquid necetatibus! nbu</p> ) 
      }
     
      <div className='flex justify-content-center w-full align-items-center gap-2'>
                <button  onClick={HideShow}  className="border bg-white text-black  h-10 w-40 rounded hover:bg-black hover:text-white">
                         {isVisibe ? "hide" : " show"}
                </button>
  
      </div>
    </div> 
  )
}

export default HideComp
