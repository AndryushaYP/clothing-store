import React from "react";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";
import CollectionItem from "../CollectionItem/CollectionItem.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, match, history, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
