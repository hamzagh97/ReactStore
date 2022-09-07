import { useState, useRef } from "react";
import Item from "./Item/Item";
import classes from "./ItemsSlider.module.css";
import { flushSync } from "react-dom";
import product1 from "../../assets/images/1.webp";
import product2 from "../../assets/images/2.webp";
import product3 from "../../assets/images/3.webp";
import product4 from "../../assets/images/4.webp";
import product5 from "../../assets/images/5.webp";
import product6 from "../../assets/images/6.webp";

const DUMMY_ITEMS = [
  {
    id: "m1",
    title: "Adidas",
    description: "Forward-looking silhouettes like the Ultraboost...",
    image: product1,
    price: 22.99,
  },
  {
    id: "m2",
    title: "Converse",
    description: "The enduring appeal of the Chuck Taylor...",
    image: product2,
    price: 16.5,
  },
  {
    id: "m3",
    title: "Reebok",
    description:
      "Founded in Britain, based in Boston, and bought by Germany's own Adidas...",
    image: product3,
    price: 12.99,
  },
  {
    id: "m5",
    title: "Vans",
    description: "Authentic in a way most sneakers can only pretend to be...",
    image: product4,
    price: 18.99,
  },
  {
    id: "m6",
    title: "Puma",
    description: "A formidable selection of retro-inflected lace-ups...",
    image: product5,
    price: 18.99,
  },
  {
    id: "m7",
    title: "Nike",
    description: "baddest name in the sneaker business...",
    image: product6,
    price: 18.99,
  },
];

//   {
//     id: "m8",
//     name: "New Balance",
//     description:
//       "The quintessential dad shoe brand has inspired countless imitators...",
//     price: 18.99,
//   },
//   {
//     id: "m9",
//     name: "Jordan Brand",
//     description:
//       "The industry has changed a lot since Nike introduced the Air Jordan...",
//     price: 18.99,
//   },
//   {
//     id: "m10",
//     name: "Yeezy",
//     description:
//       "Kanye West has transformed Yeezy into a multibillion dollar brand...",
//     price: 18.99,
//   },
//   {
//     id: "m11",
//     name: "Saucony",
//     description:
//       "The brand tends to get a little less shine than some of its glossier...",
//     price: 18.99,
//   },
//   {
//     id: "m12",
//     name: "Veja",
//     description: "Burst onto the sneaker scene with an emphasis on simple...",
//     price: 18.99,
//   },
//   {
//     id: "m13",
//     name: "Salomon",
//     description: "Emerged as a fashion-crowd favorite relatively recently...",
//     price: 18.99,
//   },
// ];

const AvailableItems = (props) => {
  const selectedRef = useRef();
  const [index, setIndex] = useState(0);
  const onClickHandle = (direction) => {
    flushSync(() => {
      if (direction === "right") {
        if (index <= DUMMY_ITEMS.length - 1) {
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
          {DUMMY_ITEMS.map((item, i) => (
            <Item
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
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
