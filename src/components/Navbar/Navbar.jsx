import React, { useState } from "react";
import navLink from "../../constant";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navItem] = useState(navLink);
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <header>
        <nav
          className={`${
            open ? "min-h-[200px] flex flex-col" : ""
          } bg-blue-700 text-white p-5 flex items-center justify-between flex-wrap px-10`}
        >
          <h1 className="font-bold text-2xl">
            <a href="/">Company Logo</a>
          </h1>
          <>
            <ul
              className={`${
                open ? "block" : "hidden"
              }  md:flex items-center space-x-6 font-bold`}
            >
              {navItem.map((item, index) => (
                <li className="inline-block my-0 mx-3 font-bold" key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div
              className={`${
                open ? "block" : "hidden"
              } md:flex items-center space-x-2`}
            >
              <input
                type="text"
                placeholder="Search here..."
                className="outline-none py-3 px-5 rounded font-bold"
              />
              <button className="outline-none bg-green-700 hover:bg-green-800 text-white py-3 px-5 rounded font-bold">
                Search
              </button>
            </div>
          </>
          <div
            className="menu md:hidden block text-3xl fixed top-5 ml-8 right-7"
            onClick={handleMenuOpen}
          >
            {!open ? <IoMenu /> : <RxCross2 />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
