import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "@/hooks/DarkModeContext";
import { LanguageProvider } from "@/hooks/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DarkModeProvider>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </DarkModeProvider>
    </div>
  );
}