import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_24w5JNriIPxeSvAEfPganar0004VNNtRgg";

  const onToken = token => {
    console.log("Paymen Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Stripe"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
