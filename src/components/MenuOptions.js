import React, { useState } from "react";
import MenuItem from "./MenuItem";

const MenuOptions = ({ title, items, showMenu, getCurrentIndex }) => {
  
  return (
    <div className="mx-auto my-4 w-[70%] bg-gray-100">
      <div
        className="bg-blue-100 shadow-lg flex justify-between p-3 cursor-pointer rounded-lg"
        onClick={getCurrentIndex}
      >
        <span className="font-bold text-lg">
          {title} ({items?.length})
        </span>
        <span>{showMenu ? "⬆" : "⬇"}</span>
      </div>
      {showMenu &&
        items?.map((item) => (
          <MenuItem menu={item.card.info} key={item.card.info.id} showMenu />
        ))}
    </div>
  );
};

export default MenuOptions;
