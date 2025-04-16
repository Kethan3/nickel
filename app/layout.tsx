import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Inter } from "next/font/google";
import Container from "./container/Container";
import NavigationBar from "./components/navigation-bar/navigation-bar";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nickel",
  openGraph: {
    title: " Nickel is an example project",
    description: "Nickel is an element",
    images: {
      url: "",
      width: 1200,
      height: 628,
    },
  },
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html >
      <body className={inter.className} >
        <div >
          <NavigationBar />
          <div  />
          <Container >{props.children}</Container>
        </div>
      </body>
    </html>
  );
};


export default RootLayout;
