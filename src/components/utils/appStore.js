import cartSlice from "./cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

console.log("inside of cart store");
const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appStore;
