import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoListObj = () => {
  const [inputVal, setInputVal] = useState("");
  const [updatedValue, setUpdateValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const Name = "fruits";
  const [task, setTask] = useState(() => {
    try {
      const localData = localStorage.getItem(Name);
      return localData ? JSON.parse(localData) : [];
    } catch {
      console.log("Error parsing local storage", error);
    }
  });
  console.log(task);

  const handleSubmit = () => {
    if (!inputVal) return alert("Please add task!");

    if (task.includes(inputVal)) return alert("You can't enter same value!");

    if (toggle && inputVal) {
      const updatedTask = task.map((val) =>
        val.id === updatedValue ? { ...val, value: inputVal } : val
      );
      setInputVal("");
      setToggle(false);
      setUpdateValue("");
      return setTask(updatedTask);
    }
    setTask((prev) => [...prev, { id: Date.now(), value: inputVal }]);
    setInputVal("");
  };

  // Local Storage...

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(task));
  }, [task]);

  const handleDelete = (val) => {
    const filterArray = task.filter((item) => item.id !== val);
    setTask(filterArray);
  };

  const handleUpdate = (id) => {
    setUpdateValue(id);
    const findValue = task.find((val) => val.id === id);
    setInputVal(findValue.value);
    setToggle(true);
  };

  // Reset
  const handleReset = () => {
    setTask([]);
  };
  return (
    <>
      <div className="container w-[50%] m-auto border border-black p-4 min-h-[400px]">
        <h1 className="font-bold text-3xl text-center my-3">Todo App</h1>

        <div className="input flex items-center justify-center">
          <input
            type="text"
            value={inputVal}
            onChange={(event) => setInputVal(event.target.value)}
            className="border border-black outline-none p-3 text-xl"
            autoFocus
          />
          <button
            className="bg-blue-700 border border-blue-700 text-white p-3 text-xl"
            onClick={handleSubmit}
          >
            {!toggle ? "Add Task" : "Update"}
          </button>
        </div>

        <ul>
          {task.map((currTask) => (
            <li
              key={currTask.id}
              className="border border-black p-3 m-3 rounded flex items-center justify-between"
            >
              {currTask.value}
              <div className="btn">
                <button
                  className="mx-2 px-2 py-1 text-white bg-green-600 rounded"
                  onClick={() => handleUpdate(currTask.id)}
                >
                  update
                </button>
                <button
                  className="mx-2 px-2 py-1 text-white bg-red-600 rounded"
                  onClick={() => handleDelete(currTask.id)}
                >
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {task.length > 0 && (
          <button
            className="mx-2 px-2 py-1 text-white bg-red-600 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default TodoListObj;
