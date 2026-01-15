"use client";

import { useContext, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ServicosClient = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  ]);

  const images = [
    '/assets/servico/Massoterapia.jpeg',
    '/assets/servico/Fisioterapia_Pediatrica.jpeg'
  ];

  const imagesMap = {
    fisioterapia: 1,
    massagens: 0,
  };

  const handleMouseEnterService = useCallback((service) => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;
    
    autoplay.stop();
    emblaApi.scrollTo(imagesMap[service]);
  }, [emblaApi]);

  const handleMouseLeaveService = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;
    
    autoplay.play();
  }, [emblaApi]);

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
            <div 
              className="flex flex-col justify-center items-center xl:items-start cursor-pointer"
              onMouseEnter={() => handleMouseEnterService('fisioterapia')}
              onMouseLeave={handleMouseLeaveService}
            >
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
            <div 
              className="flex flex-col justify-center items-center xl:items-start cursor-pointer"
              onMouseEnter={() => handleMouseEnterService('massagens')}
              onMouseLeave={handleMouseLeaveService}
            >
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

        </motion.div>

        {/* carrossel de imagens */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 1.2, duration: 0.8, ease: "easeInOut" },
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          ref={emblaRef}
          className="relative w-[240px] h-[400px] xl:w-[383px] xl:h-[650px] mb-4 xl:mb-8 flex-shrink-0 overflow-hidden rounded-[10px]"
        >
          <div className="flex h-full">
            {images.map((src, index) => (
              <div className="flex-grow-0 flex-shrink-0 basis-full h-full" key={index}>
                <Image
                  src={src}
                  width={756}
                  height={1344}
                  quality={100}
                  alt={`Serviço ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicosClient;