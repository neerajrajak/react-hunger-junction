import { RES_IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props.resDetails.info;
  return (
    <>
      <img
        className="h-44 rounded-md w-[100%]"
        src={RES_IMAGE_CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="font-medium text-ellipsis truncate my-2">
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-medium">{avgRating} ⭐</h4>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </>
  );
};

export const shadowedRestaurandCard = (RestaurantCard) => {
  return (props) => {
    const avgRating = props?.resDetails?.info?.avgRating;
    return (
      <div className="m-4 p-4 w-72 h-[350px] bg-gray-100 rounded-lg shadow-md hover:shadow-2xl hover:bg-blue-100">
        {
          !(avgRating > 4.2) || <label className="absolute bg-black text-yellow-50 rounded-lg m-1 p-1 text-sm">Promoted</label>
        }
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
