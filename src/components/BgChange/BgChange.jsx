import React from "react";
import { useState } from "react";
const BgChange = ({ setColor }) => {
  const [value, setValue] = useState("");
  const [makeBtn, setMakeBtn] = useState([]);

  const handleSubmit = () => {
    if (!value) return alert("Insert some value...");

    setMakeBtn((prev) => [...prev, value]);
    setValue("");
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-2xl my-3 border border-white py-1 px-2">
          Enter any color name in the input will display below with the same
          color functionality
        </h1>
        <div className="input">
          <input
            type="text"
            className="py-3 px-4 rounded"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="py-3 px-4 rounded border border-white"
          >
            Add task
          </button>
        </div>

        <div>
          {makeBtn.map((curElem) => (
            <button
              onClick={() => setColor(curElem)}
              style={{ backgroundColor: curElem }}
              className="bg-red-600 border border-white text-white py-3 px-6 mx-4 rounded my-4"
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center my-10">
        <button
          onClick={() => setColor("red")}
          className="bg-red-600 text-white py-3 px-6 mx-4 rounded my-4"
        >
          Red
        </button>
        <button
          onClick={() => setColor("black")}
          className="bg-black text-white py-3 px-6 mx-4 rounded my-4"
        >
          black
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-600 text-white py-3 px-6 mx-4 rounded my-4"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-600 text-white py-3 px-6 mx-4 rounded my-4"
        >
          Green
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 text-white py-3 px-6 mx-4 rounded my-4"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("#0f0a3b")}
          className="bg-[#0f0a3b] text-white py-3 px-6 mx-4 rounded my-4"
        >
          Dark blue
        </button>
      </div>
    </>
  );
};

export default BgChange;
