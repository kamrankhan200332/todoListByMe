import React, { useState } from "react";

const Todolistdelete = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [tempValue, setTempValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSubmit = () => {
    if (!inputVal) return alert("Enter some task...");

    if (toggle && inputVal) {
      setTask((prevTask) =>
        prevTask.map((val) => (val === tempValue ? inputVal : val))
      );
      setInputVal("");
      setToggle(false);
      return;
    }

    if (task.includes(inputVal)) return alert("You can't add same value...");
    setTask((prevTask) => [...prevTask, inputVal]);
    setInputVal("");

  };

  const hancleDelete = (cat) => {
    const newArr = task.filter((val) => val !== cat);
    setTask(newArr);
  };

  const handleUpdate = (value) => {
    setInputVal(value);
    setTempValue(value);
    setToggle(true);
  };
  return (
    <>
      <div className="w-[500px] flex items-center justify-center flex-col my-5 m-auto">
        <h1 className="text-3xl my-3">Todo List</h1>
        <div className="input">
          <input
            type="text"
            className="py-3 px-4 rounded"
            value={inputVal}
            onChange={(event) => setInputVal(event.target.value)}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="py-3 px-4 rounded border border-white"
          >
            Add task
          </button>
        </div>
      </div>

      <section>
        {task.map((curElem) => (
          <li
            key={curElem}
            className="bg-yellow-500 py-2 my-2 px-8 text-xl font-bold mx-5 rounded-xl border border-white flex items-center justify-between"
          >
            {curElem}
            <div className="btn">
              <button
                className="bg-green-600 text-white py-2 px-3 rounded mx-1"
                onClick={() => handleUpdate(curElem)}
              >
                update
              </button>{" "}
              <button
                className="bg-red-600 text-white py-2 px-3 rounded mx-1"
                onClick={() => hancleDelete(curElem)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </section>
    </>
  );
};

export default Todolistdelete;
