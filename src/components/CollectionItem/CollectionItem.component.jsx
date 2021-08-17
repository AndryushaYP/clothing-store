import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <figure className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <figcaption className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </figcaption>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </figure>
  );
};

export default CollectionItem;
