import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const initialItemsState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
  Notif: { show: false, notifTitle: "", notifMessage: "" },
};

const itemsReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.addedItems.price * action.addedItems.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.addedItems.id
    );

    let updatedItems;
    if (state.items[existingItemIndex]) {
      const updatedItem = {
        ...state.items[existingItemIndex],
        amount:
          state.items[existingItemIndex].amount + action.addedItems.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.addedItems);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      Notif: {
        show: true,
        notifTitle: "success",
        notifMessage: "item added successfully",
      },
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedTotalAmount =
      state.totalAmount - state.items[existingCartItemIndex].price;

    let updatedItems;
    if (state.items[existingCartItemIndex].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        amount: state.items[existingCartItemIndex].amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      Notif: {
        show: true,
        notifTitle: "success",
        notifMessage: "item removed successfully",
      },
    };
  }
  if (action.type === "RESET") {
    return initialItemsState;
  }
  return initialItemsState;
};

const CartContextProvider = (props) => {
  const [itemsState, dispatch] = useReducer(itemsReducer, initialItemsState);

  const AddedItemsHandler = (addedItems) => {
    dispatch({ type: "ADD", addedItems: addedItems });
  };

  const removeItemsHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const resetCartHandler = () => {
    dispatch({ type: "RESET" });
  };

  const Context = {
    addItemsToCart: AddedItemsHandler,
    removeItemsFromCart: removeItemsHandler,
    AddedCartItem: itemsState.items,
    cartTotalAmount: itemsState.totalAmount,
    Notif: itemsState.Notif,
    reset: resetCartHandler,
  };

  //////////////////////////////////////////

  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
