"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import { Providers } from "./redux/provider";
import MobileFooer from "./Components/Footer/MobileFooer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-shop",
  description: "Created by Nizam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} bg-white w-fulls `}>
          <Navbar />
          {children}
          <MobileFooer />
        </body>
      </Providers>
    </html>
  );
}
