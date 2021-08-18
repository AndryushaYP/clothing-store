import React from "react";
import { withRouter } from "react-router-dom";
import "./CartDropdown.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();
  return (
    <section className="cart-dropdown">
      <ul className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </ul>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </section>
  );
};

export default withRouter(CartDropdown);
