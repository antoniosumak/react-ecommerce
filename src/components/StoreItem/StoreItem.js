import React, { useState } from 'react';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Description,
  Product,
  Price,
  Category,
  Quanty,
} from './StoreItemStyles';
import { Button, Center, ButtonInput } from '../../lib/styles/generalStyles';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { IoLaptopOutline, IoLocationOutline } from 'react-icons/io5';
import { RiHeadphoneLine } from 'react-icons/ri';

const StoreItem = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const categorieIcons = {
    Mobile: <HiOutlineDeviceMobile />,
    Laptop: <IoLaptopOutline />,
    Headphones: <RiHeadphoneLine />,
    Location: <IoLocationOutline />,
  };

  const Increment = () => {
    if (counter < data.quantity) {
      setCounter(counter + 1);
    } else setCounter(counter);
  };

  const Decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else setCounter(0);
  };

  return (
    <Wrapper>
      <Category>{categorieIcons[data.category]}</Category>
      <ImageWrapper>
        <Image src={data.imageURL} />
      </ImageWrapper>
      <Description>
        <Product>{data.product}</Product>
        <Price>{`$${data.price}`}</Price>
        <Center>
          <ButtonInput onClick={Decrement}>-</ButtonInput>
          <Quanty>{counter}</Quanty>
          <ButtonInput onClick={Increment}>+</ButtonInput>
        </Center>
      </Description>
      <Button cardButton>Add to cart</Button>
    </Wrapper>
  );
};

export default StoreItem;
