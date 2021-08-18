import React from "react";
import "./ShopPage.styles.scss";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage.component";

const ShopPage = () => {
  let { path } = useRouteMatch();
  return (
    <section className="shop-page">
      <Route exact path={`${path}`} component={CollectionsOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </section>
  );
};

export default ShopPage;
