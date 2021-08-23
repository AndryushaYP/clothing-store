import React from "react";
import { ShopPageContainer } from "./ShopPage.styles";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage.component";
import WithSpinner from "../../components/HOC/WithSpinner/WithSpinner.component";
import { firestore, convertCollections } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionPageWithSpenner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const ShopPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollections(snapshot);
      dispatch(updateCollections(collections));
      setIsLoading(false);
    });
  }, []);
  let { path } = useRouteMatch();
  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${path}/:collectionId`}
        render={(props) => <CollectionPageWithSpenner isLoading={isLoading} {...props} />}
      />
    </ShopPageContainer>
  );
};

export default ShopPage;
