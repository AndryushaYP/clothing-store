import React from "react";
import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          {quantity} * ${price}
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
