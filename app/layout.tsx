import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Inter } from "next/font/google";
import Container from "./container/Container";
import NavigationBar from "./components/navigation-bar/navigation-bar";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "./components";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nickel",
  openGraph: {
    title: " Nickel is an example project",
    description: "Nickel is an element",
   
  },
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className} >
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
       <Theme  accentColor="indigo">
        <div >
          <NavigationBar />
          <Container >{props.children}</Container>
        </div>
        </Theme>
       </ThemeProvider>

      </body>
    </html>
  );
};


export default RootLayout;
