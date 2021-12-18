import React from "react";
import {useSelector} from "react-redux";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors.js";
import CollectionPreview from "../collection-preview/CollectionPreview.jsx";
import "./collections-overview.scss";


const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return(
    <div>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default (CollectionsOverview);
