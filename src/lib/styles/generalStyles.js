import styled from 'styled-components';
import { breakpoints, colors } from './theme';

export const Main = styled.main``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 40px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  ${(p) => p.cardButton && `position: absolute`};
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 8px 24px;
  border: 1px solid ${colors.red};
  left: 50%;
  ${(p) => p.cardButton && `transform: translate(-50%);`};
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.white};
    background-color: ${colors.darkRed};
    color: ${colors.white};
  }
`;

export const ButtonInput = styled.button`
  background-color: ${colors.gray};
  color: ${colors.white};
  padding: 8px;
  border: 1px solid ${colors.gray};
  left: 50%;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.white};
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
