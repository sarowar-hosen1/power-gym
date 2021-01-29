import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

  const onToken = (token) => {
    console.log(token);
  }

  return (
    <div className="d-flex justify-content-center">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51I0rIGAfYxZFqGk2vKYzSl3EG3Nn4X3oBVRj3RJONgawEkiyNCrut1eDdyPwCqsfQ1nUB33pRCQ3DwqSpYWwyn2h00ainEb7xK"
      />
    </div>
  );
};

export default Payment;