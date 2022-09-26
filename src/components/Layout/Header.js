import React, { useContext } from "react";
import classes from "./Header.module.css";
import Navigation from "./Navigation";
import CategoriesBar from "../categories/CategoriesBar";
import Notification from "../UI/Notifications/Notifications";
import CartContext from "../UI/store/Cart-Context";

const Header = (props) => {
  const Context = useContext(CartContext);
  let showNotif = Context.Notif.show;
  const notifTitle = Context.Notif.notifTitle;
  const notifMessage = Context.Notif.notifMessage;

  // console.log(showNotif, show);
  // const notifContent = (
  //   <Notification title={notifTitle} message={notifMessage} />
  // );
  // const previousValue = useRef();
  // previousValue.current = notifContent;

  // useEffect(() => {
  //   if (showNotif) {
  //   }
  //   setShow(showNotif);
  //   const timeId = setTimeout(() => {
  //     setShow(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeId);
  //   };
  // }, [showNotif]);

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h2>StoreName</h2>
        </div>
        {props.isLoggedIn && (
          <>
            <CategoriesBar />
            <Navigation
              showCart={props.onShowCart}
              onShownav={props.isLoggedIn}
              onLogoutNav={props.onLogout}
            />
          </>
        )}
      </div>
      {showNotif && <Notification title={notifTitle} message={notifMessage} />}
    </header>
  );
};

export default Header;
