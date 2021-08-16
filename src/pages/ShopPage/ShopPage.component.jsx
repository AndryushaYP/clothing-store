import React from "react";
import "./ShopPage.styles.scss";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection.component";

const ShopPage = () => {
  const [collections, collectionsData] = React.useState(SHOP_DATA);
  return (
    <section className="shop-page">
      {collections.map(({ id, ...props }) => (
        <PreviewCollection key={id} {...props} />
      ))}
    </section>
  );
};

export default ShopPage;
