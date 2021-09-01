import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header.component";
import Spinner from "./components/Spinner/Spinner.component";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.component";
import Popup from "./components/Popup/Popup.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.component"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage.component"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage.component"));
const LoginAndRegisterPage = lazy(() =>
  import("./pages/LoginAndRegisterPage/LoginAndRegisterPage.component")
);

const App = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const selectedItem = useSelector((state) => state.shop.selectedItem);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() => (currentUser ? <Redirect to="/" /> : <LoginAndRegisterPage />)}
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
      {selectedItem && <Popup selectedItem={selectedItem} />}
    </>
  );
};

export default App;
