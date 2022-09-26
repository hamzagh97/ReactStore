import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/UI/store/CartContextProvider";
import Layout from "./components/Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import useFetch from "./hooks/use-fecth";
import ItemPage from "./pages/ItemPage";

function App() {
  const [shown, setShowCartModal] = useState();
  const [loggedIn, setIsLoggedIn] = useState(true);

  const { items, error, isLoading } = useFetch(
    "http://localhost:3005/products"
  );

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
    <CartContextProvider>
      {shown && <Cart onHideCart={hideCartModalHandler} />}

      <Layout
        onShowCart={showCartModalHndler}
        onLogout={logoutHandler}
        isLoggedIn={loggedIn}
      >
        <Switch>
          <Route path="/login">
            <LoginPage onLogin={loginHandler} />
          </Route>
          <Route path="/home">
            <HomePage onLogin={loginHandler} items={items} />
          </Route>
          <Route path="/products" exact>
            <ProductsPage items={items} />
          </Route>
        </Switch>
      </Layout>
    </CartContextProvider>

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
