import React from 'react';
import Layout from '../components/Layout';
import getCommerce from '../utils/commerce';
import Link from 'next/link';
import { useStyles } from '../utils/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Slide,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default function Home(props) {
  const { products } = props;
  const classes = useStyles();
  return (
    <Layout title='Home' commercePublicKey={props.commercePublicKey}>
      {products.length === 0 && (
        <Alert severity='success'>No product found</Alert>
      )}
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item md={3}>
            <Slide key={product.id} direction='up' in={true}>
              <Card>
                <Link href={`/products/${product.permalink}`}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={product.name}
                      image={product.media.source}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='body2'
                        color='textPrimary'
                        component='p'
                      >
                        {product.name}
                      </Typography>
                      <Box>
                        <Typography
                          variant='body1'
                          color='textPrimary'
                          component='p'
                        >
                          {product.price.formatted_with_symbol}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

// Function to get list of products from commerce js and render into server side of our app
export async function getStaticProps() {
  // Create an instance of Commerce
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}
