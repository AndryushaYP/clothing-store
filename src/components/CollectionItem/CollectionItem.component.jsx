import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <figure className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <figcaption className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </figcaption>
    </figure>
  );
};

export default CollectionItem;
