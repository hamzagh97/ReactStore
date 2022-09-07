import classes from "./CartItem.module.css";
import itemImg from "../../../assets/images/mw_global_asos_design_headwear_moment_870x1110.avif";

const CartItem = (props) => {
  const ItemPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-image"]}>
        <img src={props.image} alt="" />
      </div>
      <h3>{props.title}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>{ItemPrice}</span>
        <span className={classes.amount}>x {props.amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
