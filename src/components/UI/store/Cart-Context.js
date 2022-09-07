import React from "react";

const CartContext = React.createContext({
  addItemsToCart: (addedItems) => {},
  removeItemsFromCart: (id) => {},
  AddedCartItem: [],
  cartTotalAmount: 0,
});

export default CartContext;
