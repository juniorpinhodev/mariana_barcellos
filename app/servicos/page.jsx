"use client"
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const servicos = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* texto */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
        }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
            Lorem ipsum consectetur adipisicing
          </h2>
          <p className="lead max-w-[600px] mx-auto xl:mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur assumenda eos odit dolor 
          </p>
          {/* itens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
            {/* itens */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Masagem</h3>
              </div>
                <p className="pl-6 text-[15px]">
                  Tipos de massagens
                </p>
            </div>
            {/* ultimo item */}
            {/* itens */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Masagem</h3>
              </div>
                <p className="pl-6 text-[15px]">
                  Tipos de massagens
                </p>
            </div>
            {/* ultimo item */}
            {/* itens */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Masagem</h3>
              </div>
                <p className="pl-6 text-[15px]">
                  Tipos de massagens
                </p>
            </div>
            {/* ultimo item */}
            {/* itens */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Masagem</h3>
              </div>
                <p className="pl-6 text-[15px]">
                  Tipos de massagens
                </p>
            </div>
            {/* ultimo item */}
            
          </div>
          {/* btn */}
          <button className="btn mx-auto xl:mx-0">Saiba Mais</button>
        </motion.div>
        {/* imagem */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
        }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex w-[384px] h-[534px] relative"
        >
          <Image
            src="/assets/servico/img.jpg"
            fill
            quality={100}
            alt=""
            className="object-contain"
            />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default servicos

