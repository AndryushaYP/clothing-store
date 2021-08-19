import React from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  ValueContainer,
  ArrowContainer,
  RemoveButtonContainer,
} from "./CheckoutItem.styles";
import { useDispatch } from "react-redux";
import { clearItemFromCart, removeItemFromCart, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity, id } = item;
  const dispatch = useDispatch();
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => dispatch(removeItemFromCart(id))}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => dispatch(addItem(item))}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(id))}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
