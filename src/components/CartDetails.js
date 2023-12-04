import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/cartSlice";

const CartDetails = () => {
  const dispatch = useDispatch();

  //   Always subscribe to right portion of the store else we will lead to performance issue
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearAll = () => {
    dispatch(clearCart());
  };
  return cartItems.length ? (
    <div className="mx-auto mt-7 w-[60%] bg-gray-50">
      <h1 className="text-2xl font-semibold text-cyan-600 mt-5 text-center">
        Cart Items
      </h1>
      <>
        <div className="text-center">
          {cartItems.map((item) => (
            <MenuItem menu={item} key={item.id}></MenuItem>
          ))}
        </div>
        <div className="text-right mr-3 p-2">
          <button
            className="px-4 bg-slate-300 m-4 rounded-md h-9 font-semibold cursor-pointer hover:shadow-lg hover:bg-slate-400"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      </>
    </div>
  ) : (
    <h1 className="text-2xl font-semibold text-cyan-600 w-[60%] mx-auto text-center mt-5">
      Your cart is empty
    </h1>
  );
};

export default CartDetails;
