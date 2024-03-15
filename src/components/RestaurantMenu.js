import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESMENU_API, mockResMenu } from "./utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState([]);
  const [resName, setResName] = useState("");
  useEffect(() => {
    fetchResMenu();
  }, []);
  const fetchResMenu = async () => {
    const menuRes = await fetch(RESMENU_API + resId);

    const jsonMenu = await menuRes.json();
    const cards =
      jsonMenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setResName(jsonMenu.data.cards[0].card.card.text);
    if (cards) {
      setResMenu(cards);
    } else {
      console.log("inside if", mockResMenu);
      setResMenu(mockResMenu);
    }
  };

  // checking undefined and null

  if (resMenu.length == 0) {
    return <Shimmer />;
  }

  const dispatch = useDispatch();
  const handleAddItem = (menuItem) => {
    //dispatch action
    console.log("dispatch is called");
    dispatch(addItem(menuItem));
  };
  return (
    <div>
      <h1>Menu : {resName} </h1>
      <h3>
        {resMenu.map((menu) => (
          <ul className="flex" key={menu.card.info.id}>
            <li>
              {menu?.card?.info?.name} - Rs.{" "}
              {menu.card.info.defaultPrice
                ? menu.card.info.defaultPrice / 100
                : menu.card.info.price / 100}
            </li>
            <li>
              <button
                className="my-2 px-1  border-2 border-black rounded-lg bg-green-300"
                //onClick={() => handleAddItem(menu?.card?.info)}
                //onClick={handleAddItem}
                onClick={handleAddItem(menu?.card?.info)}
              >
                Add to Cart
              </button>
            </li>
          </ul>
        ))}
      </h3>
    </div>
  );
};

export default RestaurantMenu;
