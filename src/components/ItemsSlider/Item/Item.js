import React, { useContext } from "react";
import ItemForm from "./ItemForm";
import classes from "./Item.module.css";
import CartContext from "../../UI/store/Cart-Context";

const Item = React.forwardRef((props, ref) => {
  const Context = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addAmountToCart = (amount) => {
    Context.addItemsToCart({
      id: props.id,
      title: props.title,
      description: props.description,
      price: props.price,
      image: props.image,
      amount: amount,
    });
  };

  return (
    <div className={classes.item}>
      <img src={props.image} alt="" ref={ref} />
      <div className={classes.info}>
        <h3>{props.title}</h3>
        {/* <div className={classes.description}>{props.description}</div> */}
        <div className={classes.price}>{price}</div>
        {!props.isProductPage && <ItemForm takeAmount={addAmountToCart} />}
      </div>
    </div>
  );
});
export default Item;
