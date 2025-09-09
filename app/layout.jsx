import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";

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

export const metadata = {
  title: {
    default: 'Mariana Barcellos | Fisioterapia e Pilates em Palhoça',
    template: '%s | Mariana Barcellos Fisioterapia',
  },
  description: 'Fisioterapeuta em Palhoça, SC. Oferecendo Fisioterapia, Pilates, Terapias Integrativas e Massagens. Atendimento especializado para sua saúde e bem-estar.',
  keywords: ['Fisioterapia em Palhoça', 'Pilates em Palhoça', 'Fisioterapeuta Palhoça', 'Drenagem Linfática Palhoça', 'Terapias Integrativas Palhoça', 'Mariana Barcellos'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body 
      className={`${marcellus.variable} ${montserrat.variable}`}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <div className="flex-grow">
            { children }
          </div>
          <Footer />
        </CursorProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physiotherapy",
            "name": "Mariana F. Barcellos Fisioterapeuta",
            "url": "https://www.marianafbarcellos.com",
            "telephone": "+5548984465676",
            "email": "fisio.marianafbarcellos@outlook.com",
            "areaServed": [
              {
                "@type": "City",
                "name": "Palhoça"
              },
              {
                "@type": "City",
                "name": "São José"
              },
              {
                "@type": "City",
                "name": "Florianópolis"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/fisiomarianafbarcellos/"
            ],
            "image": "https://www.marianafbarcellos.com/icon.png",
            "description": "Fisioterapeuta em Palhoça, SC, especializada em Fisioterapia Neurofuncional, Pilates, Terapias Integrativas e Massagens. Atendimento domiciliar e personalizado."
          }) }}
        />
      </body>
    </html>
  );
}