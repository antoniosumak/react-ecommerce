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
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { IoLaptopOutline, IoLocationOutline } from 'react-icons/io5';
import { RiHeadphoneLine } from 'react-icons/ri';

const StoreItem = ({ data }) => {
  const categorieIcons = {
    Mobile: <HiOutlineDeviceMobile />,
    Laptop: <IoLaptopOutline />,
    Headphones: <RiHeadphoneLine />,
    Location: <IoLocationOutline />,
  };

  return (
    <Wrapper>
      <Category>{categorieIcons[data.category]}</Category>
      <ImageWrapper>
        <Image src={data.imageURL} />
      </ImageWrapper>
      <Description>
        <Product>{data.product}</Product>
        <Price>{data.price}</Price>
      </Description>
      <Button cardButton>Add to cart</Button>
    </Wrapper>
  );
};

export default StoreItem;
