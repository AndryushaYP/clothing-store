import React from "react";
import { ShopPageContainer } from "./ShopPage.styles";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage.component";

const ShopPage = () => {
  let { path } = useRouteMatch();
  return (
    <ShopPageContainer>
      <Route exact path={`${path}`} component={CollectionsOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
