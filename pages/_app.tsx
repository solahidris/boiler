import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/hooks/DarkModeContext";
import { LanguageProvider } from "@/hooks/LanguageContext";
// import { SupabaseProvider } from "@/hooks/SupabaseContext";
// import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
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