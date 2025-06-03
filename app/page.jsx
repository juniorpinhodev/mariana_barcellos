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
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* texto */}
          <div className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <motion.h1 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1"
            >
              Mariana Barcellos <br />Fisioterapeuta
            </motion.h1>
            <motion.p 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler} 
              className="lead max-w-xl mx-auto">
              Recupere sua mobilidade e qualidade de vida com tratamentos eficazes e personalizados
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
                <ModalVideo />
              </motion.div>
            </div>
          </div>
          {/* imagem */}
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              {/* <Image 
                src={'/assets/home/img.png'}
                width={864} 
                height={650}
                quality={100}
                alt="Foto de Doutora Mariana F. Barcellos" 
                /> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
