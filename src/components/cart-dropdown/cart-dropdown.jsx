import React from "react";
import CustomButton from "../custom-button/custom-button.jsx";
import "./cart-dropdown.scss";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.jsx";
import {selectCartItems} from "../../redux/cart/cart.selectors.js";
import {createStructuredSelector} from "reselect";

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
    }

     </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>

);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
