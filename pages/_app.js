import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout';

import './index.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { session } = pageProps;

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="" />
        <meta
          name="viewport"
          content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Tiny app.</title>
        <meta name="description" content="Tiny app ." />

        <meta property="og:type" content="website" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="author" content="Uchi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="monetization" content="$ilp.uphold.com/AkPRXRWYrLhF" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
