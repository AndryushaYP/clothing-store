import React from "react";
import "./PreviewCollection.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ name, price, imageUrl, id }) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
          ))}
      </div>
    </section>
  );
};

export default PreviewCollection;
