import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";
import FloatingActionButtons from "@/components/view/homepage/components/FloatingButtons";
import QueryProvider from "@/components/common/providers/QueryClientProvider";

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

export const metadata = {
  title:
    "Hair Growth Solution, Best Hair Clinics for all Hair Problem in India-QR678",
  description:
    "Are you looking for the best hair clinics in India? QR678 is one of the best hair growth solutions to get rid of every hair problem by the top hair specialist doctors and experts. Book your appointment today!",
  keywords: [
    "Hair growth",
    "Hair clinics”,“hair problem solution”,“hair solution”,“Hair care”,“Hair treatment",
  ],
  author: "Author",
};

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
