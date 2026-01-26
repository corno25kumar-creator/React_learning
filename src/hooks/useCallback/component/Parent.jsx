import React, { useState, useCallback } from "react";
import Button from "./Button";

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useCallback prevents function recreation on each render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">

      <h1 className="text-2xl font-bold">useCallback Mini Project</h1>

      <h2 className="text-xl">Count: {count}</h2>

      <div className="flex gap-4">
        <Button onClick={increment} label="Increment" />
        <Button onClick={decrement} label="Decrement" />
      </div>

      <input
        type="text"
        placeholder="Type name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border rounded"
      />
    </div>
  );
}

export default Parent;
