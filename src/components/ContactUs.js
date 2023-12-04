import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const ContactUs = () => {
  const { loggedInUser, setUserName} = useContext(UserContext);
  return (
    <div className="border-box border-2 rounded-xl border-blue-500 my-16 mx-auto w-[70%] h-52 p-4">
      <h2 className="text-2xl font-semibold">Contact Us from Food App.</h2>
      <div className="mt-2">
        <p className="mb-2 font-medium">Just a demo to set value in the context</p>
        <input className="rounded-lg border-2 border-black p-1" type="text" value={loggedInUser} onChange={
          e=> setUserName(e.target.value)
        }></input>
      </div>
    </div>
  );
};

export default ContactUs;
