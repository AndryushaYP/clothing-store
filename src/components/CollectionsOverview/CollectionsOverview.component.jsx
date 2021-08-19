import React from "react";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector((state) => selectCollectionForPreview(state));
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
