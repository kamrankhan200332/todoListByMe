import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BgChange from "./components/BgChange/BgChange";
import TodoList from "./components/TodoList/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clock from "./components/Clock/Clock";
import Restaurent from "./components/RestaurentApp/Restaurent";
import Todolistdelete from "./components/TodoListDeleteYeKaBia/TodoListDelete";
import TodoListObj from "./components/TodoListObj/TodoListObj";
import DynamicInputData from './components/DynamicInputData/DynamicInputData'

function App() {
  const bgColor = "bgcolor";
  const [color, setColor] = useState(
    localStorage.getItem(bgColor) ? localStorage.getItem(bgColor) : "blue"
  );

  localStorage.setItem(bgColor, color);

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", width: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/todolist" exact element={<TodoList />} />
            <Route path="/clock" exact element={<Clock />} />
            <Route path="/restaurent" exact element={<Restaurent />} />
            <Route path="/todolistdelete" exact element={<Todolistdelete />} />
            <Route path="/todolistobj" exact element={<TodoListObj />} />
            <Route path="/dynamicInputData" exact element={<DynamicInputData />} />
            <Route
              path="/bgChanger"
              exact
              element={<BgChange setColor={setColor} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
