import React from "react";
import "./CartDropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";

const CartDropdown = () => {
  return (
    <section className="cart-dropdown">
      <ul className="cart-items"></ul>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </section>
  );
};

export default CartDropdown;
