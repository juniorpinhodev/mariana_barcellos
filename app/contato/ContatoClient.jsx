"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaDirections, FaMap } from 'react-icons/fa';

const ContatoClient = () => {
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
      className="flex items-center overflow-x-hidden relative pt-[150px]"
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
                    Ponte do Imaruim - Palhoça, SC
                  </p>
                </div>
                
              </div>
              {/* fim item endereço */}
              
              {/* item telefone */}
<div className="relative right-8 md:left-[1.5rem] xl:left-0 pl-14">
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
              <div className="relative left-1 pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/email.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Email</h4>
                  <div className="flex flex-col gap-1">
                    <p>fisio.marianafbarcellos@outlook.com</p>
                  </div>
                </div>
              </div>
              {/* fim item email */}

              {/* Google Maps Embed */}
              <div className="w-full px-6 h-56 rounded-lg overflow-hidden mt-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113017.15615410428!2d-48.798934497830004!3d-27.6275863354394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952732f8333575b3%3A0x3b75a564699c43c!2sPalho%C3%A7a%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1694200000000"
                  width="80%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

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
            <div className="w-full bg-secondary-100 max-w-[580px] gap-4 p-10 mx-auto xl:mx-0 rounded-[10px]"
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
        className="fixed bottom-16 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale comigo no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
        
        {/* Pulso animado */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </motion.button>
    </motion.section>
  )
}

export default ContatoClient;
