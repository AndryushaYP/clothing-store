import React from "react";
import "./CartDropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
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
