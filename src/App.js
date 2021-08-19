import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import Header from "./components/Header/Header.component";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));

  React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginAndRegisterPage />)}
        />
      </Switch>
    </div>
  );
};

export default App;
