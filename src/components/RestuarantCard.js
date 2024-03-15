import About from "./About";
import { CDN_RES_IMG } from "./utils/Constants";
// React fun compo => javascript fun => props => javascript fun args
export const RestaurentCard = (props) => {
  const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div
      className="w-[250px] m-4 p-4 rounded-lg"
      id={id}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg "
        alt="res-card"
        src={CDN_RES_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines ? cuisines?.join(", ") : "Default Restaurant Cuisines"}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  // return new component with promoted label
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

// export default RestaurentCard;
