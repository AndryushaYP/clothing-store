import React from "react";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from "./CheckoutPage.styles";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeButton from "../../components/StripeButton/StripeButton.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const total = useSelector((state) => selectCartTotal(state));
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <TestWarningContainer>
        *Plese use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </TestWarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
