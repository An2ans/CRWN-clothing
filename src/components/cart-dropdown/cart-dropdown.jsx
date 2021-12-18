import React from "react";
import CustomButton from "../custom-button/custom-button.jsx";
import {useSelector, useDispatch} from "react-redux";
import CartItem from "../cart-item/cart-item.jsx";
import {selectCartItems} from "../../redux/cart/cart.selectors.js";
import {withRouter} from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import {CartDropdownContainer, CartItemsContainer} from "./cart-dropdown.styles";


const CartDropdown = ({ history}) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return(
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? (
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      ):(
        <span className="empty-message">Your cart is empty</span>)
    }

     </CartItemsContainer>
    <CustomButton onClick={() =>{
      history.push("/checkout");
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>

);
}


export default withRouter(CartDropdown);
