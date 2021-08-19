import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey =
    "pk_test_51JQ1hNJhhqrhLctAGGI2CTxaY2NuTw05K4mlweD9HhPPcbi6euuPBqWRlu5FD9qFAgvFQ5REcW95lccJkD3e4tDr00nbdOnW7Y";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeButton;
