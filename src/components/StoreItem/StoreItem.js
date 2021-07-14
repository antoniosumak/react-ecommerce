import React from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Description,
  Product,
  Price,
  Category,
} from './StoreItemStyles';
import { Button } from '../../lib/styles/generalStyles';

const StoreItem = ({ data }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={data.imageURL} />
      </ImageWrapper>
      <Description>
        <Product>{data.product}</Product>
        <Category>{data.category}</Category>
        <Price>{data.price}</Price>
      </Description>
      <Button cardButton>Add to cart</Button>
    </Wrapper>
  );
};

export default StoreItem;
