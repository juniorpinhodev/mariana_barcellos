"use client";

import { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
import { CursorContext } from "@/components/CursorContext";

const WhatsAppButton = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const controls = useAnimation();
  const pathname = usePathname();

  useEffect(() => {
    controls.set({ scale: 0, opacity: 0 }); // Reseta o estado inicial
    controls.start({
      scale: 1,
      opacity: 1,
      transition: { delay: 4, duration: 0.5, ease: "easeInOut" }
    });
  }, [pathname, controls]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5548984465676";
    const message = "Olá! Gostaria de mais informações sobre os serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      animate={controls}
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
  );
};

export default WhatsAppButton;