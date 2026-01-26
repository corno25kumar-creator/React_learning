import React from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button: ${label}`);

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
    >
      {label}
    </button>
  );
});

export default Button;
