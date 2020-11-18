import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/base.css';
import '../styles/style.css';
import '../styles/notion.css';
import '../styles/prism.css';
// import Scrollbar from 'smooth-scrollbar';

import Footer from '../lib/Footer';
import Navbar from '../components/Navbar';

// if (typeof window !== 'undefined') {
//   const WebFont = require('webfontloader');
//   WebFont.load({
//     google: {
//       families: [
//         'Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
//       ]
//     }
//   });
// }

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  // useEffect(() => {
  //   const scrollbar = Scrollbar.init(document.body, {
  //     continuousScrolling: false,
  //     alwaysShowTracks: true,
  //     plugins: {},
  //   });
  //   const handleHash = (hash) => {
  //     if (!hash) {
  //       return;
  //     }
  //     const target = document.getElementById(hash.substring(1));
  //     if (target) {
  //       scrollbar.scrollIntoView(target, {
  //         offsetTop: -scrollbar.containerEl.scrollTop,
  //       });
  //     }
  //   };
  //   handleHash(window.location.hash);
  //   window.addEventListener('hashchange', () => {
  //     const { hash } = window.location;
  //     handleHash(hash);
  //   }, false);
  //   scrollbar.contentEl.addEventListener('click', (event) => {
  //     const { target } = event;
  //     if (target.tagName !== 'A') {
  //       return;
  //     }
  //     const hash = target.getAttribute('href');
  //     if (!hash || hash.charAt(0) !== '#') {
  //       return;
  //     }
  //     handleHash(hash);
  //   }, false);
  // }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=0.86,maximum-scale=3,minimum-scale=0.86"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#061329" />
        <meta name="apple-mobile-web-app-title" content="Nourman Hajar" />
        <meta name="application-name" content="Nourman Hajar" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#061329" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-38735593-3"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.dataLayer = window.dataLayer || []; function gtag(){ dataLayer.push(arguments); } gtag(\'js\', new Date()); gtag(\'config\', \'UA-38735593-3\');',
          }}
        />
      </Head>
      {router.pathname !== '/' && (<Navbar />)}
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
