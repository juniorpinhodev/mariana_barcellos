"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import StatsItem from "@/components/StatsItem";

const sobre = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-[140px] pb-12 xl:pt-32 xl:pb-0 px-4 xl:px-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0">
          {/* imagem */}
          <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2, duration: 0.8, ease: "easeInOut" }
          }}
          className="relative w-[240px] h-[320px] xl:w-[383px] xl:h-[534px] mb-4 xl:mb-8 flex-shrink-0">
            <Image 
              src="/assets/sobre/massagem2.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain" 
            />
          </motion.div>
          
          {/* Texto */}
          <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" }
          }}
          className="flex flex-col items-center xl:items-start xl:max-w-[650px] text-center xl:text-left w-full">
            <h2 className="text-[32px] leading-[34px] xl:text-[48px] xl:leading-[54px] font-primary mb-4 xl:mb-6 max-w-[540px] xl:max-w-none">
             Sobre a Mariana F. Barcellos
            </h2>
            <p className="text-base xl:text-lg mb-6 xl:mb-8 max-w-[600px] leading-relaxed">
              A Mariana Fernandes Barcellos é fisioterapeuta graduada pela Faculdade Estácio de Sá e pós-graduada em Fisioterapia Neurofuncional adulto e infantil, com título reconhecido pela Associação Brasileira de Fisioterapia Neurofuncional (ABRAFIN) em parceria com o COFFITO. Sua atuação clínica é pautada em rigor técnico, atualização científica constante e abordagem centrada no paciente.
            </p>
            
            <p className="text-base xl:text-lg mb-6 xl:mb-8 max-w-[600px] leading-relaxed">
              Com experiência em reabilitação neurológica infantil e juvenil, Mariana atua de forma preventiva, curativa, adaptativa ou paliativa nas sequelas resultantes de danos ao Sistema Nervoso, abrangendo tanto o <em>Sistema nervoso central</em> como o <em>Periférico</em> promovendo melhora da mobilidade, autonomia e qualidade de vida. Sua conduta integra avaliação precisa, intervenção baseada em evidências e um olhar humano que valoriza a singularidade de cada caso.
            </p>
            
            <p className="text-base xl:text-lg mb-8 xl:mb-8 max-w-[600px] leading-relaxed">
              Ética, excelência clínica e compromisso com resultados sustentáveis definem sua prática profissional.
            </p>
            
            {/* itens */}
            <div className="grid grid-cols-3 gap-4 xl:gap-[30px] mb-8 xl:mb-14 w-full max-w-[400px] xl:max-w-none">
              <div>
                <StatsItem 
                  countNum={100} 
                  countText="%" 
                  text="Ambiente terapêutico e relaxante" 
                />
              </div>
              <div>
                <StatsItem 
                  countNum={100} 
                  countText="%" 
                  text="Clientes felizes"
                />
              </div>
              <div>
                <StatsItem 
                  countNum={100} 
                  countText="%" 
                  text="Atendimento personalizado" 
                />
              </div>
            </div>
            {/* btn */}
            <a 
              href="https://wa.me/5548984465676?text=Olá%2C%20gostaria%20de%20mais%20informações." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent min-w-[160px] xl:min-w-[178px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[4px] rounded-br-[24px] font-primary uppercase tracking-[1px] h-[50px] xl:h-[58px] pl-6 xl:pl-8 pr-5 xl:pr-6 flex items-center justify-center text-white text-sm xl:text-base"
            >
              Entre em Contato
            </a>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default sobre;