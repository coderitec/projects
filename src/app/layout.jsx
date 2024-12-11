import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";
import { SidebarProvider } from "./providers";
import Cart from "./components/Cart";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {

  title: "Bart Mart E-commerce web app",
  description: "A project on e-commerce application using React",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>

        <Navbar/>
        <Mobile/>
        <Cart/>

        <div className="min-h-screen">

        {children}
        </div>

        <Footer/>
        </SidebarProvider>
      </body>
    </html>
  );
}
