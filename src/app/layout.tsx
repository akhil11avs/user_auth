import Head from "next/head";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import ThemeProvider from "@/theme";

import StoreProvider from "./storeProvider";

const poppinsLight = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Light.woff2",
      weight: "300",
      style: "normal",
    }
  ],
  variable: "--font-Poppins-Light",
});

const poppinsRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-Poppins-Regular",
});

const poppinsMedium = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-Poppins-Medium",
});

const poppinsSemiBold = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-SemiBold.woff2",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-Poppins-SemiBold",
});

const poppinsBold = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-Poppins-Bold",
});

const poppinsExtraBold = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-Poppins-ExtraBold",
});

const poppinsExtraLargeBold = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-ExtraLargeBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-Poppins-ExtraLargeBold",
});

export const metadata = {
  title: "User Auth",
  description: "Generated by User Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={`${poppinsLight.variable} ${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable} ${poppinsExtraBold.variable} ${poppinsExtraLargeBold.variable}`} suppressHydrationWarning={true}>
        <StoreProvider>
          <ThemeProvider>
            <Toaster position="top-right" />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
