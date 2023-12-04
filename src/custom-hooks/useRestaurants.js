import { useEffect, useState } from "react";
import { RESTAURANTS_API_URL } from "../constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const api = await fetch(RESTAURANTS_API_URL);
    const result = await api.json();
    if (result?.data?.cards?.length) {
      const tempCards = result.data.cards.filter(
        (resCard) => (resCard.card.card.id = "restaurant_grid_listing")
      );
      const resCard = tempCards.find(
        (res) =>
          res?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length
      );
      const restaurants =
        resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(() => restaurants);
      setFilteredRestaurants(restaurants);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const topRatingFilter = () => {
    const topRatedRestaurant = restaurants.filter(
      (res) => res.info.avgRating > 4
    );
    // console.log(topRatedRestaurant);
    setFilteredRestaurants(() => topRatedRestaurant);
  };

  return { restaurants, filteredRestaurants, topRatingFilter };
};

export default useRestaurants;
