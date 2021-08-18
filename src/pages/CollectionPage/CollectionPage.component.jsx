import React from "react";
import "./CollectionPage.styles.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem.component";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector((state) => selectCollection(collectionId)(state));
  const { title, items } = collection;
  return (
    <section className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionPage;
