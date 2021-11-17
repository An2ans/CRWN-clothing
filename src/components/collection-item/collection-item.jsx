import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions.js";
import {CollectionItemContainer, CollectionFooter, CollectionImage, ItemName, ItemPrice, CollectionButton} from "./collection-item.styles.jsx";


const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;

  return(

  <CollectionItemContainer>

    <CollectionImage className="image" imageUrl={imageUrl} />
    <CollectionFooter>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}</ItemPrice>
    </CollectionFooter>
    <CollectionButton onClick={() => addItem(item)} inverted >ADD TO CART</CollectionButton>

  </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
