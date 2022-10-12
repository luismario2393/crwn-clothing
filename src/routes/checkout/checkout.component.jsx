import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector.js";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import PaymentForm from "../../components/payment-form/payment-form.component";

import "./checkout.styles.js";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalSpan,
} from "./checkout.styles.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalSpan>Total: ${cartTotal}</TotalSpan>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
