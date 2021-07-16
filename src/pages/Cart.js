import React, { useContext } from 'react';
import Section from '../components/Section/Section';
import { CartRow, CartRowImage, CartRowItem } from './CartStyles';
import { CartItemsContext } from '../context/CartItemsContext';

const Cart = () => {
  const { cartItems } = useContext(CartItemsContext);
  return (
    <Section>
      <CartRow>
        <CartRowItem></CartRowItem>
        <CartRowItem>
          <strong>Product</strong>
        </CartRowItem>
        <CartRowItem>
          <strong>Quantity</strong>
        </CartRowItem>
        <CartRowItem>
          <strong>Total</strong>
        </CartRowItem>
        <CartRowItem>
          <strong>Remove item</strong>
        </CartRowItem>
      </CartRow>
      {cartItems &&
        cartItems.map((value, index) => (
          <CartRow key={index}>
            <CartRowImage src={value.imageURL} />
            <CartRowItem>{value.product}</CartRowItem>
            <CartRowItem>{value.quantity}</CartRowItem>
            <CartRowItem>{`$${value.quantity * value.price}`}</CartRowItem>
          </CartRow>
        ))}
      {console.log(cartItems)}
    </Section>
  );
};

export default Cart;
