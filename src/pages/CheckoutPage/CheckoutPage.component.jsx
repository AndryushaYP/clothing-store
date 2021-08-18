import React from "react";
import "./CheckoutPage.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
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
    </section>
  );
};

export default CheckoutPage;
