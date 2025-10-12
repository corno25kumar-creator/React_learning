import React from 'react';

function ClickEventHandle() {
  const handleClick = () => alert('Button Clicked!');

  return (
    <div className='p-4'>
      <h1 className='pb-2 text-2xl font-bold'>Handle Click Event in React</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default ClickEventHandle;
