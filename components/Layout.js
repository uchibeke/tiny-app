import React from 'react';
import { Typography, Link, Container, Divider } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';

import theme from '../components/theme';

function FooterNavs() {
  return <Typography variant="body2" color="textSecondary"></Typography>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '50px',
  },
  main: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // background: 'white'
  },
  footer: {
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    borderTop: `1px solid ${
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
    }`,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  logo: {
    width: '60px',
    cursor: 'pointer',
  },
  page: {
    minHeight: '600px',
  },
}));

export default function StickyFooter({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <div className={classes.root}>
          <Container maxWidth="lg"></Container>
          <Container maxWidth="lg" className={classes.page}>
            {children}
            <br></br>
            <br></br>
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth={false}>
              <FooterNavs />
              <hr></hr>
              <Typography variant="body1">Welcome</Typography>
            </Container>
          </footer>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}
