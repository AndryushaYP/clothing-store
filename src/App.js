import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={LoginAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
