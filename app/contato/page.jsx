"use client"
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaDirections, FaMap } from 'react-icons/fa';

const contato = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "5548984465676"; 
    const message = "Olá! Gostaria de mais informações sobre os serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden relative"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* texto */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" }
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Entre em contato</h3>
            {/* itens */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item endereço */}
              <div className="relative pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/pin.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Endereço</h4>
                  <p className="leading-relaxed">
                   Rua Jornalista Bento Silverio, 788
                    <br />
                    Ponte do Imaruim - Palhoça, SC
                  </p>
                </div>
                
              </div>
              {/* fim item endereço */}
              
              {/* item telefone */}
<div className="relative left-8 md:left-[1.5rem] xl:left-0 pl-14">
  {/* icone */}
  <div className="absolute left-0 top-0 w-[36px] h-[36px]">
    <Image src="/assets/contato/phone.svg" fill alt="" />
  </div>
  <div>
    <h4 className="h4 mb-2">Telefone</h4>
    <div className="flex flex-col gap-3">
      <p>Telefone: 48 98446 5676</p>
      
          {/* Botão WhatsApp */}
          <div className="flex items-center gap-2">
            
            <a
              href="https://wa.me/5548984465676?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/80 hover:bg-[#128C7E]/60 text-white px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
              }}
            >
              <FaWhatsapp className="text-lg" />
              Contato via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
        {/* fim item telefone */}

              {/* item email */}
              <div className="relative pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/email.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Email</h4>
                  <div className="flex flex-col gap-1">
                    <p>mariespacovip@outlook.com</p>
                  </div>
                </div>
              </div>
              {/* fim item email */}

            </div>
          </motion.div>
          {/* formulario */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" }
            }}
            className="flex-1">
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0 rounded-[10px]"
            >
              <h3 className="h3 mb-8 text-center">Receba informações</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          transition: { delay: 3, duration: 0.5, ease: "easeInOut" } 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
        
        {/* Pulso animado */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </motion.button>
    </motion.section>
  )
}

export default contato