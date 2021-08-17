import React from "react";
import "./CartDropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <section className="cart-dropdown">
      <ul className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </section>
  );
};

export default CartDropdown;
