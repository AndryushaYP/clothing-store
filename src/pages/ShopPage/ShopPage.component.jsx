import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./ShopPage.styles";

import Spinner from "../../components/Spinner/Spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/CollectionsOverview/CollectionsOverview.container")
);
const CollectionPageContainer = lazy(() => import("../CollectionPage/CollectionPage.container"));

const ShopPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  let { path } = useRouteMatch();
  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${path}`} component={CollectionsOverviewContainer} />
        <Route path={`${path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </ShopPageContainer>
  );
};

export default ShopPage;
