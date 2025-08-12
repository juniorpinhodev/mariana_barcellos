import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer"; // Import the Footer component


const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-screen">
      <body 
      className={`${marcellus.variable} ${montserrat.variable} 
      overflow-x-hidden`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <div className="flex-grow">
            <PageTransition>
              { children }
            </PageTransition>
          </div>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}