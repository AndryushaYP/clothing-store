import React from "react";
import "./CheckoutPage.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeButton from "../../components/StripeButton/StripeButton.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const total = useSelector((state) => selectCartTotal(state));
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Plese use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeButton price={total} />
    </section>
  );
};

export default CheckoutPage;
