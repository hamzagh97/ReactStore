import React from "react";

const CartContext = React.createContext({
  addItemsToCart: (addedItems) => {},
  removeItemsFromCart: (id) => {},
  AddedCartItem: [],
  cartTotalAmount: 0,
  Notif: { show: false, notifTitle: "", notifMessage: "" },
  reset: () => {},
});

export default CartContext;
