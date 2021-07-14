import React from 'react';
import Section from '../components/Section/Section';
import StoreItem from '../components/StoreItem/StoreItem';
import { Grid } from '../lib/styles/generalStyles';
import { products } from './mock';

const Store = () => {
  return (
    <Section>
      <Grid>
        {products && products.map((data) => <StoreItem data={data} />)}
      </Grid>
    </Section>
  );
};

export default Store;
