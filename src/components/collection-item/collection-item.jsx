import React from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions.js";
import {CollectionItemContainer, CollectionFooter, CollectionImage, ItemName, ItemPrice, CollectionButton} from "./collection-item.styles.jsx";


const CollectionItem = ({item}) => {
  const {name, price, imageUrl} = item;
  const dispatch = useDispatch();

  return(

  <CollectionItemContainer>

    <CollectionImage className="image" imageUrl={imageUrl} />
    <CollectionFooter>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}</ItemPrice>
    </CollectionFooter>
    <CollectionButton onClick={() => dispatch(addItem(item))} inverted >ADD TO CART</CollectionButton>

  </CollectionItemContainer>
  );
};


export default CollectionItem;
