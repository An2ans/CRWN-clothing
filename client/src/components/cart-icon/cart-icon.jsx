import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import  "./cart-icon.scss";
import {useDispatch, useSelector} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions.js";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors.js";


const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return(
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" >{itemCount}</span>
    </div>
  );
}


export default CartIcon;
