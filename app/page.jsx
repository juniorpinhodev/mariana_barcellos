"use client";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image"
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="flex items-center overflow-x-hidden pt-[150px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* texto */}
          <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            transition: { delay:2, duration: 1, ease: "easeInOut"},
          }}
          className="w-full text-center xl:text-left xl:w-[500px] pt-[20px] xl:pt-[120px]">
            <motion.h1 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 text-[48px] sm:text-[52px] md:text-[54px] xl:text-[56px] leading-tight"
            >
              Mariana F. Barcellos <br />Fisioterapeuta
            </motion.h1>
            <motion.p 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler} 
              className="lead max-w-xl mx-auto text-[14px] sm:text-[14px] md:text-[16px] xl:text-[16px] pt-[24px] leading-relaxed">
              Fisioterapia Neurofuncional baseada em evidências científicas para impulsionar marcos motores, autonomia e qualidade de vida de crianças com T21. Um olhar especializado para transformar o potencial em conquistas reais.
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-1 max-w-max mx-auto xl:mx-0">
              <motion.a
              href="https://wa.me/5548984465676?text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20avaliação."
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler} 
              className="btn btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              >
                AGENDAR AVALIAÇÃO ESPECIALIZADA
              </motion.a>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                {/* 
                 */}
              </motion.div>
            </div>
          </motion.div>
          {/* imagem */}
          <div className="flex-1">
            {isClient && (
            <motion.div 
              initial={{ opacity: 0, bottom: '-100%' }}
              animate={{ 
              opacity: 1, 
              bottom: 0, 
              transition: { delay:2.4, duration: 1.2, ease: "easeInOut"},
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex justify-center xl:justify-start xl:flex-row w-full xl:w-auto relative xl:fixed xl:bottom-0 mt-8 xl:mt-0"
              >
              <Image 
                                                src={'/assets/home/Mariana F Barcellos.svg'}
                                                width={650}
                                                height={600}
                                                quality={100}
                                                alt="Foto de Mariana F. Barcellos"
                                                className="w-4/5 h-auto md:w-[650px] md:h-[600px]"
                                                />
            </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
