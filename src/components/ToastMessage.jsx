import React from "react";

function Toast({ message }) {
  return (
    <div className="fixed top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded shadow-lg text-center z-50">
      {message}
    </div>
  );
}

export default Toast;
