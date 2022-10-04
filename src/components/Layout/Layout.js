import React from "react";
import Header from "./Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Header
        onShowCart={props.onShowCart}
        onLogout={props.onLogout}
        isLoggedIn={props.isLoggedIn}
      />
      <main>{props.children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
