import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage/LoginAndRegisterPage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, []);

  console.log(currentUser);

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
