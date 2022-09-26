import React, { useContext } from "react";
import ItemForm from "./ItemForm";
import classes from "./Item.module.css";
import CartContext from "../../UI/store/Cart-Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import ItemPage from "../../../pages/ItemPage";

const Item = React.forwardRef((props, ref) => {
  const Context = useContext(CartContext);

  // const price = `$${props.price.toFixed(2)}`;

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

  const params = useParams();

  return (
    <div className={classes.item}>
      <img src={props.image} alt="" ref={ref} />
      <div className={classes.info}>
        <Link to={`products/${props.title}`}>
          <h3>{props.title}</h3>
        </Link>
        <Route path="/products/:itemId" title={props.title}>
          <ItemPage />
        </Route>

        {/* <div className={classes.description}>{props.description}</div> */}
        <div className={classes.price}></div>
        <div>{props.gender} s shoes`</div>
        {!props.isProductPage && <ItemForm takeAmount={addAmountToCart} />}
      </div>
    </div>
  );
});
export default Item;
