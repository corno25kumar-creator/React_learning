import {useRef, useEffect} from 'react'

function InputFocus() {
    const inputRef = useRef(null);

         useEffect(() => {
        inputRef.current.focus();
        }, []);

  return (
       <div className='container p-10 bg-blue-100 min-h-screen'>
           <form>
               <input type="text" ref={inputRef} placeholder='This has focus' />
               <input type="text" placeholder='No focus when we render' />
           </form>
       </div>
  )
}

export default InputFocus
