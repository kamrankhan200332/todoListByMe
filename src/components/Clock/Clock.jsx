import React from "react";
import { useState } from "react";

const Clock = () => {
  const [timeDate, setTimeDate] = useState("");

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setTimeDate(`${formattedDate} - ${formattedTime}`);
  }, 1000);
  return (
    <div className="w-[50%] m-auto flex justify-center items-center flex-col my-4">
      <h1 className="text-4xl py-4">Local Date and Time</h1>
      <h2>{timeDate}</h2>
    </div>
  );
};

export default Clock;
