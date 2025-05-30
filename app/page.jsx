"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Image from "next/image"

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
            <h1 className="h1">
              Site Junior Pinho <br /> Comece aqui
            </h1>
          </div>
          {/* imagem */}
          <div className="flex-1">
            <div className="hidden xl:flex fixed bottom-0">
              <Image src={'assets/globe.svg'}
                width={864} 
                height={650}
                alt="Globe" 
                />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
