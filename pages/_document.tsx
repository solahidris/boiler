import { Html, Head, Main, NextScript } from "next/document";
// import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Open Graph Meta Tags --> */}
        <title>HireSolah</title>
        <meta property="og:locale" content="en_US" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="HireSolah - Websites built by experts just for you. Save cost by communicating directly with the developers to solve your needs. Multiple flexible monthly payment options. Get your stunning website up and running in no time!" /> */}
        {/* <meta name="keywords" content="website, development, experts, monthly payment, flexible, communication, developers" /> */}
        <meta name="author" content="Solah Idris" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hiresolah.com" />
        {/* https://search.google.com/search-console/welcome */}

        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta property="og:url" content="https://www.hiresolah.com/" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HireSolah" />
        <meta property="og:description" content="HireSolah - Websites built by experts just for you. Save cost by communicating directly with the developers to solve your needs. Multiple flexible monthly payment options. Get your stunning website up and running in no time!" />
        {/* <meta property="og:image" content="https://hiresolah.com/seo_fb_og_image_1200_630.png" /> */}

        {/* <!-- Twitter Meta Tags --> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:site" content="@solaheth_" /> */}
        {/* <meta name="twitter:creator" content="@solaheth_" /> */}
        {/* <meta name="twitter:title" content="HireSolah for building websites" /> */}
        {/* <meta name="twitter:description" content="HireSolah - Websites built by experts just for you. Save cost by communicating directly with the developers to solve your needs. Multiple flexible monthly payment options. Get your stunning website up and running in no time!" /> */}
        {/* <meta name="twitter:image" content="https://hiresolah.com/seo_twitter_image_1200_630.png" /> */}
        {/* <meta property="twitter:domain" content="hiresolah.com" /> */}
        {/* <meta property="twitter:url" content="https://www.hiresolah.com/" /> */}

        {/* <!-- App Icon from favicon.io --> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}

        {/* <!-- Google Font --> */}
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