import React, { useEffect, useState } from "react";

const getData = () => {
  const data = localStorage.getItem("card");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const InputProj = () => {
  const [state, setState] = useState({
    number: "",
    category: "",
    des: "",
  });

  let card = "card";
  const [store, setStore] = useState(getData());

  const handleSubmit = () => {
    let { number, category, des } = state;
    if (!number || !category || !des) return alert("Please add task...");

    setStore((prev) => [...prev, state]);

    setState({ number: "", category: "", des: "" });
  };

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(store));
  }, [store]);
  return (
    <>
      <div className="flex flex-col w-[50%] border m-auto justify-center items-center space-y-2">
        <div className="input flex space-y-2 justify-center flex-col">
          <label htmlFor="">number</label>
          <input
            type="number"
            className="py-1 px-2 border"
            value={state.number}
            onChange={(e) =>
              setState((prev) => ({ ...prev, number: e.target.value }))
            }
          />
        </div>
        <div className="input flex space-y-2 justify-center flex-col">
          <label htmlFor="">category</label>
          <input
            type="text"
            className="py-1 px-2 border"
            value={state.category}
            onChange={(e) =>
              setState((prev) => ({ ...prev, category: e.target.value }))
            }
          />
        </div>
        <div className="input flex space-y-2 justify-center flex-col">
          <label htmlFor="">description</label>
          <input
            type="text"
            className="py-1 px-2 border"
            value={state.des}
            onChange={(e) =>
              setState((prev) => ({ ...prev, des: e.target.value }))
            }
          />
        </div>

        <button
          className="bg-blue-700 text-white py-1 px-2 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>

      <div className="flex items-center justify-center space-x-3 space-y-3 mx-10 my-5 flex-wrap ">
        {store.map((item, index) => (
          <div key={index}>
            {
              <div className="border w-[400px] bg-slate-300 py-1 px-2">
                <h1 className="w-[35px] h-[35px] flex items-center justify-center border rounded-full">
                  {item?.number}
                </h1>
                <h2 className="text-2xl font-bold my-2">{item?.category}</h2>
                <h3 className="">{item?.des}</h3>
              </div>
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default InputProj;
