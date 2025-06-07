"use client"
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/Form";

const contato = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* texto */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" }
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Entre em contato</h3>
            {/* itens */}
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item endereço */}
              <div className="relative pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/pin.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Endereço</h4>
                  <p className="leading-relaxed">
                    Rua tal tal tal, 478
                    <br />
                    Palhoça, SC
                  </p>
                </div>
              </div>
              {/* fim item endereço */}
              
              {/* item telefone */}
              <div className="relative left-8 md:left-[1.5rem] xl:left-0 pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/phone.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Telefone</h4>
                  <div className="flex flex-col gap-1">
                    <p>Telefone: 48 98446 5676</p>
                    <p>Whatsapp: 48 98446 5676</p>
                  </div>
                </div>
              </div>
              {/* fim item telefone */}

              {/* item email */}
              <div className="relative pl-14">
                {/* icone */}
                <div className="absolute left-0 top-0 w-[36px] h-[36px]">
                  <Image src="/assets/contato/email.svg" fill alt="" />
                </div>
                <div>
                  <h4 className="h4 mb-2">Email</h4>
                  <div className="flex flex-col gap-1">
                    <p>email@email.com</p>
                  </div>
                </div>
              </div>
              {/* fim item email */}

            </div>
          </motion.div>
          {/* formulario */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" }
            }}
            className="flex-1">
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0 rounded-[10px]"
            >
              <h3 className="h3 mb-8 text-center">Receba informações</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default contato