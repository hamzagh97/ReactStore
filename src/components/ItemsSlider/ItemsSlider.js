import { useState, useRef } from "react";
import Item from "./Item/Item";
import classes from "./ItemsSlider.module.css";
import { flushSync } from "react-dom";
import useFetch from "../../hooks/use-fecth";

const AvailableItems = (props) => {
  const selectedRef = useRef();
  const [index, setIndex] = useState(0);
  const onClickHandle = (direction) => {
    flushSync(() => {
      if (direction === "right") {
        if (index <= props.items.length - 1) {
          setIndex(index + 4);
        } else {
          setIndex(0);
        }
      } else {
        if (index > 0) {
          setIndex(index - 4);
        } else {
          setIndex(0);
        }
      }
    });
    selectedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  // const itemProps = index === i ? { ref: selectedRef } : {};
  console.log(props.topSlider);

  return (
    <>
      {!props.topSlider && (
        <div className={classes.intro}>
          <h1>FALL FOOTWEAR FAVORITES</h1>
          <p>A FEW OF OUR BEST-SELLING SHOES</p>
        </div>
      )}
      <div className={classes.row}>
        <button
          className={`${classes.handle} ${classes["left-handle"]}`}
          onClick={() => onClickHandle("left")}
        >
          <div className={classes.text}>&#8249;</div>
        </button>
        <div className={classes.slider}>
          {props.items.map((item, i) => (
            <Item
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              gender={item.gender}
              ref={index === i ? selectedRef : null}
            />
          ))}
        </div>

        <button
          className={`${classes.handle} ${classes["right-handle"]}`}
          onClick={() => onClickHandle("right")}
          // onClick={() => scroll("right")}
        >
          <div className={classes.text}>&#8250;</div>
        </button>
      </div>
    </>
  );
};

export default AvailableItems;
