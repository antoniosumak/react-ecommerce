import styled from 'styled-components';
import { breakpoints } from '../lib/styles/theme';

export const CartRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: start;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const CartRowImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

export const CartRowItem = styled.p`
  &:nth-child(3),
  &:nth-child(5) {
    display: none;
  }

  @media screen and (${breakpoints.tablet}) {
    &:nth-child(3) {
      display: block;
    }

    @media screen and (${breakpoints.desktop}) {
    &:nth-child(5) {
      display: block;
    }
  }
`;
