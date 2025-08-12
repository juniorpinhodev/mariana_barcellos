"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image"
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
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
          className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
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
              className="lead max-w-xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-relaxed">
              Cuidando do desenvolvimento neuropsicomotor e da autonomia das crianças com carinho, ciência e dedicação.
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler} 
              className="btn btn-lg"
              >
                Saiba mais
              </motion.button>
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
            <motion.div 
              initial={{ opacity: 0, bottom: '-100%' }}
              animate={{ 
              opacity: 1, 
              bottom: 0, 
              transition: { delay:2.4, duration: 1.2, ease: "easeInOut"},
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0"
              >
              {/* <Image 
                src={'/assets/home/img.png'}
                width={864} 
                height={650}
                quality={100}
                alt="Foto de Doutora Mariana F. Barcellos" 
                /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
