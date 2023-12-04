import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resDetails, setResDetails] = useState(null);
  const [menuOptions, setMenuOptions] = useState([]);

  const fetchMenuCardOptions = (availableCards) => {
    const cardWithMenu = availableCards.find(
      (res) => res?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    return cardWithMenu.groupedCard?.cardGroupMap?.REGULAR?.cards;
  };

  const fetchRestaurantDetails = async () => {
    const api = await fetch(MENU_API_URL + resId);
    const result = await api.json();
    if (result?.data?.cards?.length) {
      const cardWithResDetails = result.data.cards.find(
        (res) => res?.card?.card?.info
      );
      setResDetails(cardWithResDetails.card.card.info);
      const cardWithdMenu = fetchMenuCardOptions(result.data.cards);
      const tempMenuOptions = cardWithdMenu?.filter((res)=> res.card.card.title && res?.card?.card?.itemCards?.length)
      setMenuOptions(tempMenuOptions);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return {
    resDetails,
    menuOptions
  }
};

export default useRestaurantMenu;
