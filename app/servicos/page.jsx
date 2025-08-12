"use client"
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";

const Servicos = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className="flex items-center overflow-x-hidden pt-[160px]"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0">
        {/* texto */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center xl:items-start xl:max-w-[650px] text-center xl:text-left w-full"
        >
          <h2 className="h2 text-[34px] sm:text-[36px] md:text-[38px] xl:text-[40px] mb-2 xl:mb-4 max-w-[540px] xl:max-w-none px-4 xl:px-0">
            Nossos Serviços
          </h2>
          <p className="lead max-w-[600px] mb-6 xl:mb-16 px-4 xl:px-0 text-base xl:text-lg">
            Oferecemos serviços especializados para cuidar da sua saúde, bem-estar físico, emocional e energético.
          </p>

          {/* itens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-[20px] mb-8 xl:mb-14 w-full px-4 xl:px-0">
            {/* Fisioterapia */}
            <div className="flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2 w-full justify-center xl:justify-start">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] flex-shrink-0"></div>
                <h3 className="text-xl xl:text-2xl">Fisioterapia</h3>
              </div>
              <p className="xl:pl-6 text-[13px] xl:text-[15px] text-center xl:text-left leading-relaxed">
                Atendimento fisioterapêutico neuropediátrico domiciliar. 
              </p>
            </div>

            {/* Terapias Integrativas */}
            <div className="flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2 w-full justify-center xl:justify-start">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] flex-shrink-0"></div>
                <h3 className="text-xl xl:text-2xl">Terapias Integrativas</h3>
              </div>
              <p className="xl:pl-6 text-[13px] xl:text-[15px] text-center xl:text-left leading-relaxed">
                Auriculoterapia (inclusive em bebês), Barra de Access, Cone Chinês e Reiki (para pessoas e pets).
              </p>
            </div>

            {/* Massagens */}
            <div className="flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2 w-full justify-center xl:justify-start">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] flex-shrink-0"></div>
                <h3 className="text-xl xl:text-2xl">Massagens</h3>
              </div>
              <p className="xl:pl-6 text-[13px] xl:text-[15px] text-center xl:text-left leading-relaxed">
                Drenagem linfática (corporal e facial), massagem relaxante, massagem relaxante com pedras quentes e massagem relaxante com ventosas.
              </p>
            </div>

            {/* Pilates */}
            <div className="flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2 w-full justify-center xl:justify-start">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px] flex-shrink-0"></div>
                <h3 className="text-xl xl:text-2xl">Pilates</h3>
              </div>
              <p className="xl:pl-6 text-[13px] xl:text-[15px] text-center xl:text-left leading-relaxed">
                Pilates solo visa melhorar a postura, o equilíbrio, a coordenação motora e a consciência corporal, além de promover o fortalecimento muscular, flexibilidade, relaxamento e alívio de dores. 
                O Pilates oferece diversos benefícios para o corpo e a mente, promovendo saúde, bem-estar e qualidade de vida.
              </p>
            </div>
          </div>

          {/* botão */}
          {/* <button className="bg-accent min-w-[150px] xl:min-w-[178px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[4px] rounded-br-[24px] font-primary uppercase tracking-[1px] h-[48px] xl:h-[58px] pl-6 xl:pl-8 pr-4 xl:pr-6 flex items-center justify-center text-white text-sm xl:text-base">Saiba Mais</button> */}
        </motion.div>

        {/* imagem - apenas desktop */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex w-[384px] h-[534px] relative flex-shrink-0 mt-[100px]"
        >
          <Image
            src="/assets/servico/pedras.jpg"
            fill
            quality={100}
            alt="Imagem de serviços"
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Servicos;