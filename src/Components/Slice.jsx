import React from "react";

function slice({inputVal, onDelete}) {
    
  return (
    <div className="flex items-center justify-between min-w-80 text-2xl font-bold my-3 p-3 bg-white rounded-lg shadow-md hover:translate-y-1 hover:scale-102 ">
      <h1 className="hover:text-yellow-400">{inputVal}</h1>
      <button className="text-sm bg-red-600 px-3 py-2 rounded-lg text-white shadow-slate-700 shadow-md hover:bg-red-500" onClick={onDelete}>delete</button>
    </div>
  );
}

export default slice;
