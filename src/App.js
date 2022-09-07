import React, { useState, useEffect, useRef } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/UI/store/CartContextProvider";
import classes from "./App.module.css";
import { ClassNames } from "@emotion/react";
import Categorie from "./components/categories/categorie/Categorie";
import ProductsPage from "./components/products/ProductsPage";

function App() {
  const [shown, setShowCartModal] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isProducts, setIsProducts] = useState(false);

  const onCategorieClickHandle = () => {
    setIsProducts(true);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const showCartModalHndler = () => {
    setShowCartModal(true);
  };

  const hideCartModalHandler = () => {
    setShowCartModal(false);
  };

  const loginHandler = (email, password) => {
    if (email.includes("@") && password.trim().length > 5) {
      localStorage.setItem("loggedIn", "1");
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    setIsProducts(false);
  };

  return (
    <CartContextProvider>
      {shown && <Cart onHideCart={hideCartModalHandler} />}
      <Header
        onShowCart={showCartModalHndler}
        onLogout={logoutHandler}
        isLoggedIn={loggedIn}
      />

      {!loggedIn && !isProducts && <Login onLogin={loginHandler} />}
      {loggedIn && !isProducts && (
        <Home onCategorieClick={onCategorieClickHandle} />
      )}
      {isProducts && <ProductsPage />}
    </CartContextProvider>
  );
}

export default App;
