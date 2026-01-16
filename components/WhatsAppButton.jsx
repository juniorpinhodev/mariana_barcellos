"use client";

import { useContext, useEffect, useState, useRef } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
import { CursorContext } from "@/components/CursorContext";

const WhatsAppButton = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const controls = useAnimation();
  const shakeControls = useAnimation();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    controls.set({ scale: 0, opacity: 0 });
    controls.start({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 1,
      }
    });

    // Frequência do shake 
    const shakeInterval = setInterval(() => {
      shakeControls.start({
        rotate: [0, -25, 25, -25, 25, -20, 20, 0],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        }
      });
    }, 4000);

    return () => clearInterval(shakeInterval);
  }, [isVisible, controls, shakeControls]);

  const handleWhatsAppClick = () => {
    // Não abre se estiver arrastando
    if (isDragging) return;
    
    const phoneNumber = "5548984465676";
    const message = "Olá! Gostaria de mais informações sobre os serviços.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setPosition({ x: info.offset.x, y: info.offset.y });
    
    // Aguarda um pouco antes de permitir o click novamente
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  return (
    <div 
      ref={constraintsRef}
      className={`fixed z-50 inset-0 pointer-events-none`}
    >
      {isVisible && (
        <motion.div
          drag={isMobile}
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          initial={{ x: 0, y: 0 }}
          className={`absolute pointer-events-auto ${
            isMobile 
              ? 'bottom-14 right-4' 
              : 'bottom-16 right-6'
          }`}
          style={{ 
            x: position.x, 
            y: position.y,
          }}
        >
          {/* Círculos de pulso - mais discretos no mobile */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500/20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </>
          )}

          {/* Pulso discreto para mobile */}
          {isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full bg-green-500/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Botão principal */}
          <motion.button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => {
              if (!isMobile) {
                mouseEnterHandler();
                setIsHovered(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                mouseLeaveHandler();
                setIsHovered(false);
              }
            }}
            animate={controls}
            whileHover={!isMobile ? { 
              scale: 1.15,
              rotate: [0, -10, 10, -10, 0],
              transition: { rotate: { duration: 0.5 } }
            } : {}}
            whileTap={{ scale: 0.9 }}
            className={`relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full shadow-lg md:shadow-2xl transition-all duration-300 group overflow-hidden ${
              isMobile ? 'p-3' : 'p-4'
            }`}
            aria-label="Contato via WhatsApp"
          >
            {/* Brilho animado de fundo - apenas desktop */}
            {!isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: isHovered ? ["-100%", "100%"] : "-100%",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Ícone do WhatsApp */}
            <motion.div
              animate={shakeControls}
              whileHover={!isMobile ? {
                rotate: [0, 15, -15, 0],
              } : {}}
              transition={{
                duration: 0.5,
              }}
            >
              <FaWhatsapp className={`relative z-10 ${isMobile ? 'text-xl' : 'text-2xl'}`} />
            </motion.div>

            {/* Partículas decorativas - apenas desktop */}
            {!isMobile && isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1,
                      scale: 0,
                    }}
                    animate={{
                      x: Math.cos((i * Math.PI) / 3) * 40,
                      y: Math.sin((i * Math.PI) / 3) * 40,
                      opacity: 0,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
              </>
            )}
          </motion.button>
          
          {/* Tooltip - apenas desktop */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={isHovered ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 10, 
                scale: 0.8 
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-xl shadow-xl whitespace-nowrap border border-gray-700"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span className="font-medium">Fale comigo no WhatsApp</span>
              </div>
              
              <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
            </motion.div>
          )}

          {/* Badge online - menor no mobile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className={`absolute -top-0.5 -right-0.5 bg-red-500 rounded-full border-2 border-white shadow-lg ${
              isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'
            }`}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-full h-full rounded-full bg-red-500"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppButton;