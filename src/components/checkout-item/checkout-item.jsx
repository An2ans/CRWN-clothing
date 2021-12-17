import React from "react";
import { useDispatch } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions.js";
import {CheckoutItemContainer, ImageContainer, ItemQuantity, ItemName, ItemPrice, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const dispatch = useDispatch();

  return(
  <CheckoutItemContainer>
    <ImageContainer>
      <img alt="item" src={imageUrl}/>
    </ImageContainer>
    <ItemName>{name}</ItemName>
    <ItemQuantity>
      <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
    </ItemQuantity>
    <ItemPrice>{price}</ItemPrice>
    <RemoveButton onClick={() => dispatch(clearItem(cartItem))}>&#10005;</RemoveButton>

  </CheckoutItemContainer>
);
};


export default CheckoutItem;
