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
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
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
          className="relative w-[304px] h-[423px] xl:w-[383px] xl:h-[534px] mb-8 xl:mx-0">
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
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
             Sobre a Dra. Mariana Fernandes Barcellos
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">A Dra. Mariana Fernandes Barcellos é fisioterapeuta graduada pela Faculdade Estácio de Sá e especialista em Fisioterapia Neurofuncional, com título reconhecido pela Associação Brasileira de Fisioterapia Neurofuncional (ABRAFIN) em parceria com o COFFITO. Sua atuação clínica é pautada em rigor técnico, atualização científica constante e abordagem centrada no paciente.

            Com experiência em reabilitação neurológica de pacientes de todas as idades, Mariana dedica-se à recuperação funcional de indivíduos com disfunções do sistema nervoso central e periférico, promovendo melhora da mobilidade, autonomia e qualidade de vida. Sua conduta integra avaliação precisa, intervenção baseada em evidências e um olhar humano que valoriza a singularidade de cada caso.

            Ética, excelência clínica e compromisso com resultados sustentáveis definem sua prática profissional.</p>
            
            {/* itens */}
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={100} countText="%" text="Ambiente terapêutico e relaxante" />
              </div>
              <div>
                <StatsItem countNum={100} countText="%" text="Clientes felizes"/>
              </div>
              <div>
                <StatsItem countNum={100} countText="%" text="Atendimento personalizado" />
              </div>
            </div>
            {/* btn */}
            <a 
              href="https://wa.me/5548984465676?text=Olá%2C%20gostaria%20de%20mais%20informações." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn mx-auto xl:mx-0"
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