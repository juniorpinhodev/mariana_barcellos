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
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center justify-between">
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
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
            Nossos Serviços
          </h2>
          <p className="lead max-w-[600px] mx-auto xl:mx-0">
            Oferecemos serviços especializados para cuidar da sua saúde, bem-estar físico, emocional e energético.
          </p>

          {/* itens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
            {/* Fisioterapia */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Fisioterapia</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Atendimento domiciliar, adulto, pediátrico e geriátrico (idosos).
              </p>
            </div>

            {/* Terapias Integrativas */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Terapias Integrativas</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Auriculoterapia (inclusive em bebês), Barra de Access, Cone Chinês e Reiki (para pessoas e pets).
              </p>
            </div>

            {/* Massagens */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Massagens</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Drenagem linfática (corporal e facial), relaxante com pedras quentes e relaxante com ventosas.
              </p>
            </div>

            {/* Pilates */}
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Pilates</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Pilates solo e com equipamentos para fortalecimento muscular, melhora da postura, alívio de dores e qualidade de vida.
              </p>
            </div>

            {/* Estética & Bem-Estar
            <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="flex items-center gap-[12px] mb-2">
                <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                <h3 className="text-2xl">Estética & Bem-Estar</h3>
              </div>
              <p className="pl-6 text-[15px]">
                Design de sobrancelhas e cuidados integrativos para sua autoestima e equilíbrio energético.
              </p>
            </div> */}

          </div>

          {/* botão */}
          <button className="btn mx-auto xl:mx-0">Saiba Mais</button>
        </motion.div>

        {/* imagem */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex w-[384px] h-[534px] relative"
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
