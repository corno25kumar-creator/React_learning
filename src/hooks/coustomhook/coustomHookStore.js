import { create } from "zustand";

export const coustomHookStore = create((set)=>({
    count:0,
    increment:()=>(set((state)=>({count:state.count + 1}))), 
    decrement: ()=>( set((state)=>({count:state.count - 1}))),
    setByValue: (val)=>(set({count:val}))
}))