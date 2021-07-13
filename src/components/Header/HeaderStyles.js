import styled from 'styled-components';
import { boxShadow, breakpoints, colors } from '../../lib/styles/theme';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  height: 72px;
  box-shadow: ${boxShadow};

  @media screen and (${breakpoints.tablet}) {
    height: 96px;
  }
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 944px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;

export const LogoContainer = styled.figure`
  width: 100px;
  height: 40px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const InnerNav = styled.div`
  display: flex;
`;

export const NavItems = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  padding: 0px 18px;
  font-size: 16px;
  font-weight: bold;

  &:last-child {
    padding-right: 0px;
  }

  &:visited {
    color: ${colors.black};
  }
`;

export const ShoppingCart = styled(FaShoppingCart)`
  font-size: 24px;
  color: ${colors.red};
`;

export const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${colors.black};
  border-radius: 10px;
`;
