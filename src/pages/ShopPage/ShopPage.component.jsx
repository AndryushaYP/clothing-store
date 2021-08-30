import React from "react";
import { ShopPageContainer } from "./ShopPage.styles";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  let { path } = useRouteMatch();
  return (
    <ShopPageContainer>
      <Route exact path={`${path}`} component={CollectionsOverviewContainer} />
      <Route path={`${path}/:collectionId`} component={CollectionPageContainer} />
    </ShopPageContainer>
  );
};

export default ShopPage;
