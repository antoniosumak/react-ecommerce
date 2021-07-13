import React, { useState } from 'react';
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
} from './HeaderStyles';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [opened, setOpened] = useState(false);
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
