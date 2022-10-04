import { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";
import Modal from "../UI/Modal";
import CartContext from "../UI/store/Cart-Context";
import CartForm from "./cartForm/CartForm";

const Cart = (props) => {
  const Context = useContext(CartContext);
  // const cartItems = Context.AddedCartItem.length;
  const items = Context.AddedCartItem;
  const [showForm, setShowForm] = useState(false);
  const [showError, setShowError] = useState(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem("cartItems")) {
  //     setItems(JSON.parse(localStorage.getItem("cartItems")));
  //   }
  // }, []);

  // useEffect(() => {
  const cartItemRemoveHandler = (id) => {
    Context.removeItemsFromCart(id);
    //     if (cartItems === 0) {
    //       setShowForm(false);
    //     }
  };
  // }, [cartItems, Context])

  const cartItemAddHandler = (item) => {
    Context.addItemsToCart({ ...item, amount: 1 });
  };

  const onOpenForm = () => {
    if (items.length > 0) {
      setShowForm(true);
    }

    if (items.length === 0) {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      setShowForm(false);
    }
  }, [items.length]);

  const closeFormHandle = () => {
    setShowForm(false);
  };

  const formError = <div>You have to add items first</div>;

  const onAddOrderHandle = async (personalInfo) => {
    await fetch(
      "https://test-3db7e-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: personalInfo,
          orderedItems: Context.AddedCartItem,
        }),
      }
    );
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalAmount");
    Context.reset();
  };

  return (
    <Modal hideCartFromBackdrop={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            image={item.image}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Context.cartTotalAmount.toFixed(2)}</span>
      </div>

      {!showForm && (
        <div className={classes.actions}>
          {showError && formError}
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Close
          </button>
          <button className={classes.button} onClick={onOpenForm}>
            Order
          </button>
        </div>
      )}
      {showForm && (
        <CartForm onCloseForm={closeFormHandle} onAddOrder={onAddOrderHandle} />
      )}
    </Modal>
  );
};

export default Cart;
