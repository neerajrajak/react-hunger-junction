import { useEffect, useState } from "react";
import { RESTAURANTS_LIST } from "../utils/mockData";
import RestaurantCard, { shadowedRestaurandCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_API_URL } from "../utils/constants";
import useOnlineStatus from "../custom-hooks/useOnlineStatus";


const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ShadwedRestaurant = shadowedRestaurandCard(RestaurantCard);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const api = await fetch(RESTAURANTS_API_URL, {mode:'cors'});
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

  const filterByTopRating = (e) => {
    e.preventDefault();
    const topRatedRestaurant = restaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(() => topRatedRestaurant);
  };

  const filterByRestaurantName = (e) => {
    e.preventDefault();
    const filteredRestaurants = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(() => filteredRestaurants);
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }


  return <div className="mx-auto flex justify-between w-[90%]">
    {
      !filteredRestaurants?.length ? (
        <Shimmer count={10} />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search m-4 p-4">
              <input
                type="text"
                value={searchText}
                className="border border-solid border-black rounded-md p-1 font-medium"
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              <button
                className="px-4 bg-slate-300 m-4 rounded-md h-9 font-semibold hover:shadow-lg hover:bg-slate-400"
                onClick={filterByRestaurantName}
              >
                Search
              </button>
              <button
                className="px-2 m-3 bg-green-200 rounded-md h-9 font-semibold hover:shadow-lg hover:bg-green-300"
                onClick={filterByTopRating}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto justify-between">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <ShadwedRestaurant resDetails={restaurant}/>
              </Link>
            ))}
          </div>
        </div>
      )
    }
  </div>
};

export default Body;
