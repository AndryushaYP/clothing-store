import React from "react";
import "./ShopPage.styles.scss";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";

const ShopPage = () => {
  return (
    <section className="shop-page">
      <CollectionsOverview />
    </section>
  );
};

export default ShopPage;
