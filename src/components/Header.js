import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import Login from "./Login";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  // useEffect would be called after your component renders
  // Empty dependency array [] => component loads => useEffect called on initial render only
  // Don't specify dependency array => component loads => on every render of your comp, useEffect called
  // If you have a variable that is being updated and if you have mentioend inside depenedency array it will call useEffect

  // read data from your store
  console.log("useselector is about to call");
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  useEffect(() => {}, [btnText]);

  const onlineStatus = useOnlineStatus();
  console.log("online status", onlineStatus);
  return (
    <div className="flex bg-pink-100 justify-between">
      <div className="w-28">
        <img
          className="logo-img"
          alt="app-logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="">
        <ul className="flex">
          <li className="m-4 p-4">
            Online Status {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-4 p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="m-4 p-4">
            <Link to="/contact">Contact us</Link>
          </li>

          <li className="m-4 p-4 font-bold text-lg">
            Cart - {cartItems.length}
          </li>
          <button
            className="m-4"
            onClick={() => {
              btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
