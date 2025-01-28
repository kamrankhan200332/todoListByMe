import React from "react";

const NavbarRes = ({ filterItem, menuList }) => {

  return (
    <div>
      <ul className="flex items-center space-x-4 justify-center text-2xl my-3">
        {menuList.map((item, index) => (
          <li className="bg-white py-1 px-2 rounded cursor-pointer" key={index} onClick={() => filterItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarRes;
