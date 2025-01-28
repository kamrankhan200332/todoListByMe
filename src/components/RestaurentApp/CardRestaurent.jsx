import React from "react";
import { useState } from "react";
import { cards } from "./index";
import NavbarRes from "./NavbarRes";

const uniqueList = [
  ...new Set(
    cards.map((curElement) => {
      return curElement.category;
    })
  ),
  "All",
];

const CardRestaurent = () => {
  const [cardData, setCardData] = useState(cards);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
      if (category === "All") {
        setCardData(cards);
      }

    const updatedList = cards.filter((curElem) => {
      return curElem.category === category;
    });
    setCardData(updatedList);
  };

  return (
    <div>
      <NavbarRes filterItem={filterItem} menuList={menuList} />
      <div className="flex justify-center items-center flex-wrap px-[20px]">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card w-[350px] flex items-start justify-center flex-col p-5  border border-red-700 m-4"
          >
            <span className="card-number w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              {card.id}
            </span>
            <span className="brand my-2 font-bold opacity-70">
              {card.brand}
            </span>
            <span className="category font-bold text-3xl opacity-80">
              {card.category}
            </span>
            <p className="my-2">{card.description}</p>
            <div className="image object-cover w-[100%]">
              <img
                src={card.img}
                className="w-[100%] h-[180px]"
                alt="card-image"
              />
            </div>
            <div className="btn flex items-center justify-end mt-2">
              <button className="bg-blue-700 text-white py-2 px-3 rounded">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRestaurent;

// className =
//   "card w-[350px] flex items-start justify-center flex-col p-5 border border-red-700 my-4";
