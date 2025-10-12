import React from 'react';

function Wrapper({ children }) {
  return (
    <div className="border w-80 border-gray-400 rounded p-4 m-4 shadow-md">
      {children}
    </div>
  );
}

export default Wrapper;
