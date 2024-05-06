import { Html, Head, Main, NextScript } from "next/document";
// import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Standard meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta name="author" content="Solah Idris" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        {/* <meta name="description" content="HireSolah - Websites built by experts just for you. Save cost by communicating directly with the developers to solve your needs. Multiple flexible monthly payment options. Get your stunning website up and running in no time!" /> */}
        {/* <meta name="keywords" content="website, development, experts, monthly payment, flexible, communication, developers" /> */}
        {/* <meta property="og:url" content="https://www.hiresolah.com/" /> */}
        {/* <meta property="og:image" content="/homepage_image.png" /> */}
        
        {/* Twitter Card meta tags (optional) */}
        {/* <meta name="twitter:card" content="https://pbs.twimg.com/profile_images/1757732310315900928/XUjDh9vB_400x400.jpg" /> */}
        {/* <meta name="twitter:site" content="@solaheth_" /> */}
        {/* <meta name="twitter:title" content="HireSolah" /> */}
        {/* <meta name="twitter:description" content="Save cost by communicating directly with the developers to create your prime website." /> */}
        {/* <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1757732310315900928/XUjDh9vB_400x400.jpg" /> */}

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