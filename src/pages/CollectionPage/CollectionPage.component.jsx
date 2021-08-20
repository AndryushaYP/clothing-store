import React from "react";
import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./CollectionPage.styles";
import CollectionItem from "../../components/CollectionItem/CollectionItem.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector((state) => selectCollection(collectionId)(state));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
