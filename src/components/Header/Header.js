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
} from './HeaderStyles';
import logo from '../../assets/images/logo.png';
import { CartItemsContext } from '../../context/CartItemsContext';

const Header = () => {
  const [opened, setOpened] = useState(false);
  const { cartItems } = useContext(CartItemsContext);
  const links = [
    { label: 'Shop', path: '/' },
    { label: 'Login', path: '/login' },
    { label: <ShoppingCart />, path: '/cart' },
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
            <NavItems to="cart">
              <ItemsCounter>{cartItems && cartItems.length}</ItemsCounter>
              <ShoppingCart />
              <CartSummary>
                {cartItems &&
                  cartItems.map((value, index) => (
                    <CartSummaryItems key={index}>
                      {value.product}
                    </CartSummaryItems>
                  ))}
              </CartSummary>
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
