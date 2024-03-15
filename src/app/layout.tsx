'use client'
import React, { createContext, useState} from "react";
import type { Metadata } from "next";
import "./globals.css";
import 'animate.css';

type LanguageContextType = {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {} 
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState('fr');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <html lang={lang}>
      <link rel="icon" href="/assets/svg/logo-default-white.svg" /> 
        <body>{children}</body>
      </html>
    </LanguageContext.Provider>
  );
}
