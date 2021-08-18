import React from "react";
import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </section>
  );
};

export default PreviewCollection;
