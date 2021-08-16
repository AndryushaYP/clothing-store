import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage.component";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={LoginAndRegisterPage} />
      </Switch>
    </div>
  );
};

export default App;
