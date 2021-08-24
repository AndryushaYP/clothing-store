import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import Header from "./components/Header/Header.component";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage.component";
import ProtectedRoute from "./components/HOC/ProtectedRoute/ProtectedRoute.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <ProtectedRoute
          exact
          currentUser={currentUser}
          path="/signin"
          component={LoginAndRegisterPage}
        />
      </Switch>
    </div>
  );
};

export default App;
