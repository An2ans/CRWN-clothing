import React from "react";

import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors.js";

import CheckoutItem from "../checkout-item/checkout-item.jsx";
import StripeCheckoutButton from "../stripe-button/stripe-button.jsx";
import {CheckoutPageContainer,CheckoutHeader,HeaderBlock,Total, Warning } from "./checkout-page.styles";

const CheckoutPage = () => {

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);


  return(
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>

        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>

        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>

        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>

        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>

        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ) )
      }

      <Total>TOTAL: £{total}</Total>
      <Warning> *Please, use the following test credit card for payments:
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CCV: 123
      </Warning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
}




export default CheckoutPage;
