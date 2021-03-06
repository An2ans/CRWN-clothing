import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JuLqNBzWxuDCrxsF0EL14gqXExJYOX8OX9hDsH1vk2cU8hzG0yqZkALTJnniSvq3BNDC9w5DZNfMkjVbPhT892D00GAI0K66X";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment susccessful")
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was an issue with your payment. Please sure you use the rpovided credit card details.");
    });
  }

  return (
    <StripeCheckout
    lable="Pay Now"
    name="CRWN Clothing."
    billingAddress
    shippingAddress
    image=""
    description={`Your total is £${price}`}
    amount={priceForStripe}
    pannelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}/>
  );
};

export default StripeCheckoutButton;
