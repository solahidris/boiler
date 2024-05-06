import { Html, Head, Main, NextScript } from "next/document";
// import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="IMPORTANT! WRITE WEBSITE DESCRIPTION HERE! --- bla bla bla this is a copy" /> */}
        {/* <meta name="keywords" content="IMPORTANT! WEBSITE KEYWORDS! --- sample, keyword, for, website" /> */}
        <meta name="author" content="Solah Idris" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Analytics /> */}
      </body>
    </Html>
  );
}