import {create } from 'zustand';

const myStore = create((set, get)=>({
    data:"chandan",

    changeName : () => {
        set({data:"donald trump"})
    },

    getCurrentName : () => {
        
          const {data} = get();

          set(()=>({
            data: data.toUpperCase()
          }))

      
    }

}))


export default myStore
