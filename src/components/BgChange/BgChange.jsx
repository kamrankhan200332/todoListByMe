import React from "react";
const BgChange = ({setColor}) => {
  
  return (
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
  );
};

export default BgChange;
