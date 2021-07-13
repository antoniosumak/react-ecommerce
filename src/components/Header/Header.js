import React from 'react';
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
} from './HeaderStyles';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const links = [
    { label: 'Shop', path: '/shop' },
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
            {links.map((value, index) => (
              <NavItems key={index} to={value.path}>
                {value.label}
              </NavItems>
            ))}
          </InnerNav>
        </Nav>
        <Hamburger>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </Hamburger>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
