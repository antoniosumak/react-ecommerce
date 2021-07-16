import React, { useState, useContext } from 'react';
import {
  HeaderWrapper,
  HeaderInner,
  LogoContainer,
  NavItems,
  Logo,
  Nav,
  InnerNav,
  ShoppingCart,
  Hamburger,
  HamburgerLine,
  MobileMenu,
  ItemsCounter,
  CartSummary,
  CartSummaryItems,
  Alltogether,
  CartSummaryRow,
  MiniImage,
  CartTotal,
  CartTotalValues,
} from './HeaderStyles';
import logo from '../../assets/images/logo.png';
import { CartItemsContext } from '../../context/CartItemsContext';

const Header = () => {
  const [opened, setOpened] = useState(false);
  const { cartItems } = useContext(CartItemsContext);

  const cartTotal =
    cartItems.length > 0 &&
    cartItems
      .map((value) => {
        return value.price * value.quantity;
      })
      .reduce((sum, currentValue) => {
        return (sum += currentValue);
      });

  const links = [
    { label: 'Shop', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Admin', path: '/admin' },
    { label: <ShoppingCart />, path: '/cart' },
  ];

  const cartLabels = [
    {
      label: '',
    },
    {
      label: 'Product',
    },
    {
      label: 'Quantity',
    },
    {
      label: 'Total',
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <Nav>
          <InnerNav>
            <NavItems exact to="/">
              Shop
            </NavItems>
            <NavItems to="/login">Login</NavItems>
            <NavItems to="/admin">Admin</NavItems>
            <NavItems to="cart">
              <ItemsCounter>{cartItems && cartItems.length}</ItemsCounter>
              <Alltogether>
                <ShoppingCart />
                <CartSummary>
                  <CartSummaryRow>
                    {cartLabels.map((value, index) => (
                      <CartSummaryItems key={index}>
                        {value.label}
                      </CartSummaryItems>
                    ))}
                  </CartSummaryRow>
                  {cartItems.length > 0 ? (
                    cartItems.map((value, index) => (
                      <CartSummaryRow key={index}>
                        <MiniImage src={value.imageURL} />
                        <CartSummaryItems>{value.product}</CartSummaryItems>
                        <CartSummaryItems>{value.quantity}</CartSummaryItems>
                        <CartSummaryItems>
                          {`$${value.price * value.quantity}`}
                        </CartSummaryItems>
                      </CartSummaryRow>
                    ))
                  ) : (
                    <h2>This bitch empty</h2>
                  )}
                  <CartTotal>
                    <CartTotalValues>Your total is: </CartTotalValues>
                    <CartTotalValues>{`$${cartTotal}`}</CartTotalValues>
                  </CartTotal>
                </CartSummary>
              </Alltogether>
            </NavItems>
          </InnerNav>
        </Nav>
        <Hamburger onClick={() => setOpened(!opened)}>
          <HamburgerLine opened={opened} />
          <HamburgerLine opened={opened} />
          <HamburgerLine opened={opened} />
        </Hamburger>
      </HeaderInner>
      <MobileMenu visible={opened}>
        {links.map((value, index) => (
          <NavItems key={index} to={value.path}>
            {value.label}
          </NavItems>
        ))}
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
