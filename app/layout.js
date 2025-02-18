import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";
import FloatingActionButtons from "@/components/view/homepage/components/FloatingButtons";
import QueryProvider from "@/components/common/providers/QueryClientProvider";
import { getMetaDataService } from "@/actions/get-request";

const geistSans = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Helvetica-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

async function getMetadata(slug) {
  const res = await getMetaDataService(slug);
  console.log("res", res);
  return res;
}

export async function generateMetadata() {
  const metadata = await getMetadata("home");
  return {
    title: metadata?.title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
    authors: [{ name: "Authors" }],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f8f8f8] antialiased`}
      >
        <QueryProvider>
          <Header />
          {children}
          <FloatingActionButtons />
          <Toaster />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
