import type { Metadata } from "next";
import { League_Gothic, Poppins, Oswald, Raleway, Lato, Montserrat } from "next/font/google";

import "./css/color.css";
import "./globals.css";
import "./css/button.css";

import { initializeApollo } from "@/utils/apolloClient";
import { GET_COLOR_DATA } from "@/graphql/queries";
import { parseColorData } from "@/utils/color-utils/parseColorData";
import { generateCSSVariables } from "@/utils/color-utils/generateCSSVariables";
import { generateCSSString } from "@/utils/color-utils/generateCSSString";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const league_gothic = League_Gothic({
  variable: "--font-league-gothic",
  weight: "variable",
  subsets: ["latin"],
})

const oswald = Oswald({
  variable: "--font-oswald", 
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Cabinet GUIHAIRE",
  description: "Site Web du Cabinet Guihaire",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const client = initializeApollo();
  const { data } = await client.query({ query: GET_COLOR_DATA });

  const colorMap = parseColorData(data.couleur)
  const cssVars = generateCSSVariables(colorMap);
  const cssString = generateCSSString(cssVars);

  return (
    <html lang="fr">
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssString }} />
      </head>
      <body className={`
        ${poppins.variable} 
        ${league_gothic.variable} 
        ${oswald.variable} 
        ${raleway.variable} 
        ${lato.variable} 
        ${montserrat.variable} 
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
