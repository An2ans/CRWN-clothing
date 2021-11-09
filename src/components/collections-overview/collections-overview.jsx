import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors.js";
import CollectionPreview from "../collection-preview/CollectionPreview.jsx";
import "./collections-overview.scss";


const CollectionsOverview = ({collections}) => (
  <div>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
