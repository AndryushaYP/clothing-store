import React from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.cartItems.length);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
