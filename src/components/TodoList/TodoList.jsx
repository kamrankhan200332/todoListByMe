import React from 'react';
import { useEffect, useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");

    const fruits = "fruitsTodo";
    const [task, setTask] = useState(() => {
      const rawData = localStorage.getItem(fruits);
      return rawData ? JSON.parse(rawData) : [];
    });

    const [toggle, setToggle] = useState(false);
    const [tempValue, setTempValue] = useState("");

    // Handle Submit...
    const handleSubmitForm = (e) => {
      e.preventDefault();

      if (!inputValue) {
        return alert("Enter some value...");
      }

      // for, to update...
      if (toggle && inputValue) {
        setTask((prevTasks) =>
          prevTasks.map((val) => (val === tempValue ? inputValue : val))
        );
        setInputValue(""); // Reset input value
        setToggle(false); // Reset toggle state
        return;
      }

      if (task.includes(inputValue)) {
        setInputValue("");
        return;
      }
      setTask((prevTask) => [...prevTask, inputValue]);
      setInputValue("");
    };

    // Add data in a localStorage...

    useEffect(() => {
      localStorage.setItem(fruits, JSON.stringify(task));
    }, [task]);

    // Reset all values
    const handleReset = () => {
      setTask([]);
    };

    // Delete...
    const handleDelete = (value) => {
      const updatedArray = task.filter((items) => items !== value);

      setTask(updatedArray);
    };

    // Update
    const handleUpdate = (value) => {
      setInputValue(value);
      setTempValue(value);
      setToggle(true);
    };
    
  return (
    <div>
      <div className="container w-[50%] m-auto">
        <h1 className="text-center font-bold text-3xl">Todo List</h1>

        <div className="form">
          <form onSubmit={handleSubmitForm}>
            <div className="input flex items-center justify-center w-[50%] m-auto">
              <input
                type="text"
                value={inputValue}
                autoFocus
                onChange={(event) => setInputValue(event.target.value)}
                className="p-3 border border-gray-950 outline-none"
              />
              <button
                type="submit"
                className="p-3 bg-blue-600 text-white font-bold"
              >
                Add Task
              </button>
            </div>
          </form>

          <ul>
            {task.map((curTask, index) => (
              <li
                key={index}
                className="border border-black my-3 rounded p-4 flex items-center justify-between"
              >
                {curTask}
                <div className="btn">
                  <button
                    className="mx-2 p-2 rounded bg-green-600 text-white"
                    onClick={() => handleUpdate(curTask)}
                  >
                    update
                  </button>
                  <button
                    className="mx-2 p-2 rounded bg-red-600 text-white"
                    onClick={() => handleDelete(curTask)}
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {task.length > 0 && (
            <button
              className="p-2 rounded bg-red-600 text-white"
              onClick={handleReset}
            >
              Reset All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
