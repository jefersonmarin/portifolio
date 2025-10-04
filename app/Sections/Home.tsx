'use client';

import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function HomeSection() {
  const { scrollY } = useViewportScroll();

  // Transform para afastar o conteúdo ao rolar
  const yTransform = useTransform(scrollY, [0, 500], [0, -100]);
  const scaleTransform = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <section
      id="home"
      className="h-screen bg-black relative text-white px-12 py-12 flex flex-col justify-start"
    >
      {/* Texto Principal */}
      <motion.div
        style={{ y: yTransform, scale: scaleTransform }}
        className="mt-92 w-full space-y-2"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-8xl font-bold uppercase tracking-wide"
        >
          JM Next Web
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-8xl font-bold uppercase tracking-wide text-[#7f34b4]"
        >
          Desenvolvimento de Websites
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-6xl font-semibold"
        >
          Comércio local & Serviços
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-b border-gray-500 mt-6"
        />
      </motion.div>

      {/* Subtexto com efeito de scroll */}
      <motion.p
        style={{ y: yTransform, scale: scaleTransform }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 w-full md:max-w-2xl text-xl md:text-2xl text-gray-300"
      >
        Transformamos sua presença online em uma experiência profissional, moderna e acessível.
      </motion.p>

      {/* Botão / CTA com efeito de scroll */}
      <motion.a
        href="#contatos"
        style={{ y: yTransform, scale: scaleTransform }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-12 right-12 px-6 py-3 bg-[#7f34b4] rounded-lg text-white text-lg font-medium hover:bg-[#7f34b4c7] transition"
      >
        Iniciar projeto
      </motion.a>
    </section>
  );
}



  