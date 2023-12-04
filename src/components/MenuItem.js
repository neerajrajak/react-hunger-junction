import React from "react";
import { RES_IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const MenuItem = ({ menu }) => {

  const dispatch = useDispatch();

  const handleAddItem = ()=>{
    console.log('Dispatch an Action: ', menu);
    dispatch(addItem(menu))
  }
  return (
    <div className="flex justify-between p-2 m-4 border-gray-300 border-b-2">
      <div className="flex-col text-left w-[80%]">
        <span className="block font-semibold">{menu.name}</span>
        <span className="block font-medium text-slate-800">
          ₹ { (menu.price || menu.defaultPrice) / 100}
        </span>
        <span className="block text-xs text-slate-500 my-2">
          {menu.description}
        </span>
      </div>
      <div className="mx-2 mb-4">
        <button className="absolute p-2 mt-[5rem] text-center bg-white text-green-600 font-bold text-xs shadow-lg rounded-lg"
        onClick={handleAddItem}>
          ADD +
        </button>
        <img
          src={RES_IMAGE_CDN_URL + menu.imageId}
          className="w-32 h-24 rounded-lg"
        ></img>
      </div>
    </div>
  );
};

export default MenuItem;
