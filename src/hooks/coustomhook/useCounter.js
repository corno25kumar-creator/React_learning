import { coustomHookStore } from "./coustomHookStore";

export const useCounter = () => {

  const count = coustomHookStore((state) => state.count);
  const increment = coustomHookStore((state) => state.increment);
  const decrement = coustomHookStore((state) => state.decrement);
  const setByValue = coustomHookStore((state) => state.setByValue);

    return {
      count, 
      increment, 
      decrement, 
      setByValue
    }
}