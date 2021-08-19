import React from "react";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./CartIcon.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectCartItemsCount(state));
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconContainer />
      <ItemCountContainer className="item-count">{count}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
