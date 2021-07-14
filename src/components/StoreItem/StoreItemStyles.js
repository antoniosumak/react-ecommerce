import styled from 'styled-components';
import { boxShadow, colors } from '../../lib/styles/theme';

export const Wrapper = styled.div`
  padding: 20px;
  box-shadow: ${boxShadow};
  position: relative;
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Description = styled.div``;

export const Product = styled.h2`
  color: ${colors.black};
  text-align: center;
  padding: 8px 0px;
`;

export const Price = styled.p``;

export const Category = styled.p``;
