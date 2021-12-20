import React from "react";
import {useParams} from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.jsx";
import {useSelector} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors.js";


import "./collection-page.scss";

const CollectionPage = () => {
  const params = useParams();
  const collection = useSelector(selectCollection(params.collectionId))
  const {title, items} = collection;
  return(
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {
        items.map(item => (
         <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)};



export default CollectionPage;
