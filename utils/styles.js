import { createMuiTheme, makeStyles } from '@material-ui/core';
export const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
      margin: '2rem 0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: '#9c2483',
    },
    secondary: {
      main: '#74b0dc',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f04000',
    },
    background: {
      default: '#ffffff',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: '0 14rem',
    backgroundColor: '#ffffff',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: '1rem',
  },
  logo: {
    padding: '.5rem',
  },
  nav: {
    padding: '0.2rem',
  },
  search: {
    fontSize: '1.7rem',
  },
  signIn: {
    fontSize: '1.7rem',
  },
  cart: {
    fontSize: '1.7rem',
  },
  main: {
    padding: '2rem',
  },
  largeImage: {
    paddingTop: '4rem',
    maxWidth: '50rem',
    width: '100%',
  },
  mt1: {
    marginTop: '1rem !important',
  },
  p1: {
    padding: '1rem !important',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
}));
