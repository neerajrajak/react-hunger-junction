import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu";
import MenuOptions from "./MenuOptions";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resDetails, menuOptions } = useRestaurantMenu(resId);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("From Hook ResDetails: ", resDetails);
  console.log("From Hook Recomended: ", menuOptions);


  return resDetails ? (
    <div className="flex-col box-border m-3 text-center">
      <h1 className="my-2 text-5xl text-cyan-600 font-bold">
        {resDetails?.name}{" "}
      </h1>
      <h3 className="my-2 text-xl font-bold italic">
        <span>{resDetails?.cuisines?.join(", ")}</span> -{" "}
        <span>{resDetails?.costForTwoMessage}</span>
      </h3>
      {menuOptions.map((menu, index) => {
        return <MenuOptions
        key={index}
        title={menu.card.card.title}
        items={menu.card.card.itemCards}
        showMenu={currentIndex === index ? true: false}
        index={index}
        getCurrentIndex={()=>{ setCurrentIndex((prev, curr)=>{
          if(prev !== index) return index;
        })}}
      />
      })}
    </div>
  ) : (
    <Shimmer count={4} />
  );
};

export default RestaurantMenu;
