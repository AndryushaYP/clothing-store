import React from "react";
import "./CollectionsOverview.styles.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector((state) => selectCollectionForPreview(state));
  return (
    <section className="collections-overview">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </section>
  );
};

export default CollectionsOverview;
