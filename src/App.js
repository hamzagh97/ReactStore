import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import ItemPage from "./pages/ItemPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./components/UI/store/Cart-Context";

function App() {
  const [shown, setShowCartModal] = useState();
  const [loggedIn, setIsLoggedIn] = useState();
  const Context = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(Context.AddedCartItem));
    localStorage.setItem(
      "totalAmount",
      JSON.stringify(Context.cartTotalAmount)
    );
  }, [Context.AddedCartItem, Context.cartTotalAmount]);

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
  };

  return (
    <>
      {shown && <Cart onHideCart={hideCartModalHandler} />}

      <Layout
        onShowCart={showCartModalHndler}
        onLogout={logoutHandler}
        isLoggedIn={loggedIn}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/login"
            element={!loggedIn && <LoginPage onLogin={loginHandler} />}
          />
          <Route path="/home" element={loggedIn && <HomePage />} />

          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/item-details/:itemId" element={<ItemPage />} />
        </Routes>
      </Layout>
    </>

    // <CartContextProvider>
    //   {shown && <Cart onHideCart={hideCartModalHandler} />}
    //   <Header
    //     onShowCart={showCartModalHndler}
    //     onLogout={logoutHandler}
    //     isLoggedIn={loggedIn}
    //   />

    //   {!loggedIn && !isProducts && <Login onLogin={loginHandler} />}
    //   {loggedIn && !isProducts && (
    //     <Home onCategorieClick={onCategorieClickHandle} />
    //   )}
    //   {isProducts && <ProductsPage />}
    // </CartContextProvider>
  );
}

export default App;
