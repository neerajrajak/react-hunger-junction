import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import useOnlineStatus from "../custom-hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);

  // if no dependency array - useEffect is called on every component render
  // if
  useEffect(() => {
    // console.log("Header useEffect");
  }, [isLoggedIn]);
  return (
    <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="logo-container">
        <Link to="/">
          <img className="w-32 h-28 rounded-lg cursor-pointer" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-items flex items-center font-medium">
        <ul className="flex p-4 m-4 text-lg">
          <li className="px-4">
             {useOnlineStatus() ? "✅" : "⛔"}
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/grocerries">Groceries</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/contactus">Contact Us</Link>
          </li>
          
          <li className="px-4 hover:text-blue-500">
          <button
            className="login-btn"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            {isLoggedIn ? loggedInUser : "Login"}
          </button>
          </li>
          <li className="px-4 text-xl hover:text-blue-500 cursor-pointer">
            <Link to="/cart">
            <label className="inline-block">Cart ({ cartItems.length } Item)</label>
            </Link>
          </li>
          {/* <li className="px-4 hover:text-blue-500 hover:text-xl">
             { loggedInUser }
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
