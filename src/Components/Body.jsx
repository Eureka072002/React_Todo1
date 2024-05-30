import React, { useEffect, useRef, useState } from "react";
import Slice from "./Slice";


function Body() {
    const [inputValue, setInputValue] = useState([]);
    const input = useRef(null);

    const addTodo = () => {
        const currVal = input.current.value
        // setInputValue(prev => [...prev, currVal]);
        if (currVal) {
            setInputValue((prev) => [...prev, currVal]);
            input.current.value = "";
        }else{
          if(currVal.length < 1){
            alert("Enter the value");
          }
          
        }
        
    }

    useEffect(() => {
      alert("Slice created")
    }, [addTodo]);
    

    const handleDelete = (indexToDelete) => {
        setInputValue((prev) => prev.filter((_, index) => index !== indexToDelete));
    };

    
    

  return (
    <div className="flex flex-col items-center mt-40 w-2/3 bg-sky-300 rounded-lg shadow-slate-500 shadow-lg">
      <div className="flex items-center justify-between gap-3 p-4 mt-10 mb-[40px]">
        <input
          type="text"
          ref = {input}
          placeholder="write text..."
          className="border p-3 text-black rounded-md shadow-md"
        ></input>
        <button className="bg-zinc-600 text-white px-3 py-3 rounded-md shadow-md hover:translate-y-0 hover:scale-105" onClick={addTodo}>
          Submit
        </button>
      </div>
      {inputValue.map((val, idx) => (
        <Slice key={idx} inputVal={val} onDelete={() => {handleDelete(idx)}} />
      ))}
    </div>
  );
}

export default Body;
