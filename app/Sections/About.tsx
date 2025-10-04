'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import perfilImg from "../assets/perfil.png"; // substitua pela sua imagem

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative bg-white text-black py-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Imagem à esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-full md:w-1/2"
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={perfilImg}
              alt="Sobre mim"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Texto à direita */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase flex items-center gap-3">
            <span className="text-purple-700">■</span> Sobre mim
          </h2>

          <p className="text-xl md:text-2xl font-semibold">
            Olá, sou Jeferson Marin. Desenvolvedor de software especializado em criação de sites modernos e funcionais.
          </p>

          <p className="text-gray-700 text-base md:text-lg">
            Crio websites personalizados que sejam visualmente atraentes e tecnicamente impecáveis. 
            Cada projeto é único, desde sites para pequenas empresas até projetos mais complexos. 
            Trabalho junto com você desde a ideia inicial até o site finalizado, encontrando soluções criativas e ideais para sua empresa.
          </p>

          <motion.a
            href="#contatos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-purple-700 text-white font-medium rounded-lg shadow hover:bg-purple-800 transition"
          >
            Iniciar projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
