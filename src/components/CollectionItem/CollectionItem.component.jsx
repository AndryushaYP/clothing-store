import React from "react";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  ImageContainer,
  AddButton,
} from "./CollectionItem.styles";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { setSelectedItem } from "../../redux/shop/shop.actions";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <CollectionItemContainer>
      <ImageContainer
        imageUrl={imageUrl}
        className="image"
        onClick={() => dispatch(setSelectedItem(item))}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
