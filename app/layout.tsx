import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translag - Real-time Translation for Nigerian Languages",
  description:
    "Translag - Real-time Translation App By John Caleb - Break language barriers with instant translation between English and Nigerian languages using Translag",
  metadataBase: new URL("https://translag.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: "Translag - Real-time Translation for Nigerian Languages",
    description:
      "Break language barriers with instant translation between English and Nigerian languages using Translag",
    creator: "@thejohncaleb",
  },
  openGraph: {
    title: "Translag - Real-time Translation for Nigerian Languages",
    description:
      "Break language barriers with instant translation between English and Nigerian languages using Translag",
    images: [{
      url: "https://translag.vercel.app/media/logo.png"
    }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
       {/* <Suspense fallback="...">
          <Nav />
        </Suspense>*/}
        <main className="flex min-h-screen w-full flex-col items-center pt-16">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
