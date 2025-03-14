import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Categories from "./components/Categories"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inicio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <Categories />
      {children}
      <Footer />
      </body>
    </html>
  );
}
