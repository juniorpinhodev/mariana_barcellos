import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";


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
      <body className={`${marcellus.variable} ${montserrat.variable} 
      overflow-x-hidden`}
      >
        <CursorProvider>
          <Header />
          
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}