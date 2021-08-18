import React from "react";
import "./CheckoutItem.styles.scss";
import { useDispatch } from "react-redux";
import { clearItemFromCart, removeItemFromCart, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity, id } = item;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={() => dispatch(removeItemFromCart(id))}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <button className="remove-button" onClick={() => dispatch(clearItemFromCart(id))}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
