import React, { useContext, useEffect } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Link,
  Container,
  IconButton,
  Box,
  Badge,
  CircularProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { theme, useStyles } from '../utils/styles';
import Image from 'next/image';
import Head from 'next/head';
import NextLink from 'next/link';
import { siteName } from '../utils/config';
import getCommerce from '../utils/commerce';
import { Store } from './Store';
import {
  CART_RETRIEVE_REQUEST,
  CART_RETRIEVE_SUCCESS,
} from '../utils/constants';

// implement  material ui layout for all pages

export default function Layout({
  children,
  commercePublicKey,
  title = 'Weprintshop',
}) {
  const classes = useStyles();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    const fetchCart = async () => {
      const commerce = getCommerce(commercePublicKey);
      dispatch({ type: CART_RETRIEVE_REQUEST });
      const cartData = await commerce.cart.retrieve();
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
    };
    fetchCart();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <title>{`${title} - ${siteName}`}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar
          position='static'
          color='default'
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <NextLink href='/'>
              <Link noWrap href='/' className={classes.toolbarTitle}>
                <IconButton>
                  <Image
                    src='/welogo.png'
                    alt='We Print Your Gift Logo'
                    width={45}
                    height={45}
                    className={classes.logo}
                  />
                </IconButton>
              </Link>
            </NextLink>
            <nav className={classes.nav}>
              <NextLink href='/search'>
                <Link
                  variant='button'
                  color='textPrimary'
                  href='/search'
                  className={classes.link}
                >
                  <IconButton>
                    <Badge color='secondary'>
                      <SearchIcon className={classes.search} color='primary' />
                    </Badge>
                  </IconButton>
                </Link>
              </NextLink>
              <NextLink href='/signin'>
                <Link
                  variant='button'
                  color='textPrimary'
                  href='/signin'
                  className={classes.link}
                >
                  {' '}
                  <IconButton>
                    <Badge color='secondary'>
                      <AccountCircleIcon
                        className={classes.signIn}
                        color='primary'
                      />
                    </Badge>
                  </IconButton>
                </Link>
              </NextLink>
              <NextLink href='/cart'>
                <Link
                  variant='button'
                  color='textPrimary'
                  href='/cart'
                  className={classes.link}
                >
                  {cart.loading ? (
                    <CircularProgress />
                  ) : cart.data.total_items > 0 ? (
                    <IconButton>
                      <Badge
                        badgeContent={cart.data.total_items}
                        color='secondary'
                      >
                        <ShoppingBasketIcon
                          className={classes.cart}
                          color='primary'
                        />
                      </Badge>
                    </IconButton>
                  ) : (
                    <IconButton>
                      <Badge>
                        <ShoppingBasketIcon
                          className={classes.cart}
                          color='primary'
                        />
                      </Badge>
                    </IconButton>
                  )}
                </Link>
              </NextLink>
            </nav>
          </Toolbar>
        </AppBar>
        {/* Hero section */}
        <Container component='main' className={classes.main}>
          {children}
        </Container>
        {/* End hero  */}
        <Container maxWidth='md' component='footer'>
          <Box mt={5}>
            <Typography variant='body2' color='textSecondary' align='center'>
              {'© '}
              {siteName} 2021
              {'.'}
            </Typography>
          </Box>
        </Container>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}
