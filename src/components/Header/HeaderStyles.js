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
  padding: 0 40px;

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
  position: relative;
  color: ${colors.white};
  padding: 24px 0px;
  font-size: 28px;
  font-weight: bold;
  @media screen and (${breakpoints.tablet}) {
    margin: 0px 18px;
    font-size: 16px;
    color: ${colors.black};

    &:before {
      content: '';
      width: 0%;
      transition: 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        display: block;
        bottom: -10px;
        background: ${colors.red};
        height: 4px;
        width: 100%;
      }
    }
  }
`;

export const ShoppingCart = styled(FaShoppingCart)`
  font-size: 24px;
  color: ${colors.red};
`;

export const Hamburger = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${colors.black};
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  transform-origin: 2px;

  &:first-child {
    transform: ${(p) => (p.opened ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  &:nth-child(2) {
    opacity: ${(p) => (p.opened ? '0' : '1')};
    transform: ${(p) => (p.opened ? 'translateX(30px)' : 'transformX(0px)')};
  }

  &:last-child {
    transform: ${(p) => (p.opened ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }
`;

export const MobileMenu = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: calc(100% - 72px);
  margin-top: 72px;
  transition: 0.3s ease-in-out;
  bottom: ${(p) => (p.visible ? '0px' : '-100%')};
  right: 0;
  z-index: 10;
  background-color: ${colors.black};
  text-transform: uppercase;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;
