import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/shared/Navbar";
import { Footer } from "./components/shared";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "soundtrack-your-reading",
  description: "created by blake sim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <html lang="en">
        <body className={notoSans.className}>
          <Navbar />

          {children}

          <Footer />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
