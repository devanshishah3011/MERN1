import { Link } from "react-router-dom";
import { RestaurentCard, withPromotedLabel } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { RES_API, mockRestaurants } from "./utils/Constants";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantPromotedCard = withPromotedLabel(RestaurentCard);
  useEffect(() => {
    // make api call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    // convert to json
    const json = await data.json();
    console.log("json.data.cards[4].card.card.gridElements", json.data);
    setResList(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
        ? json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
        ? json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h3>Internet Down!!</h3>
      </div>
    );
  }

  if (resList.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-3">
          <input
            className="border-2 border-solid border-black"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-4 px-2 border-2 border-black rounded-lg bg-green-300"
            onClick={() => {
              // search rest card logic applies here
              const filteredSearchList = resList.filter((res) => {
                return res.info.name.includes(searchText);
              });
              setFilteredResList(filteredSearchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="my-2 px-1  border-2 border-black rounded-lg bg-green-300"
          onClick={() => {
            // filter logic
            const filteredRes = resList.filter((res) => {
              return res.info.avgRating > 4;
            });
            // resList = filteredRes;
            setFilteredResList(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link
            to={"/restuarantmenu/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime <= 30 ? (
              <RestaurantPromotedCard resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
