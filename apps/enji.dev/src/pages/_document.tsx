import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div id="skip-navigation" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
