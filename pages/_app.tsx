import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { DarkModeProvider } from "@/hooks/DarkModeContext";
import { LanguageProvider } from "@/hooks/LanguageContext";
// import { SupabaseProvider } from "@/hooks/SupabaseContext";
// import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{`HireSolah | Your Website Expert`}</title>
        {/* <!-- Prevent zoom-in at input on mobile --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <DarkModeProvider>
        <LanguageProvider>
          {/* <SupabaseProvider> */}
            <Component {...pageProps} />
            {/* <Analytics /> */}
          {/* </SupabaseProvider> */}
        </LanguageProvider>
      </DarkModeProvider>
    </div>
  );
}
