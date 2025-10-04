'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import projetoFigaro from '../assets/projetoFigaro.png';
import miaBeautyStudio from '../assets/miaBeautyStudio.png';

const projetos = [
    {
        title: 'Barbearia',
        description: 'Site institucional com localização das unidades e integração com aplicativo de agendamento.',
        image: projetoFigaro,
        link: 'https://www.barbeariafigaromarcal.com/',
    },
    {
        title: 'Studio de Beleza',
        description: 'Site institucional com endereço e informações de contato.',
        image: miaBeautyStudio,
        link: 'https://miabeautystudiodebeleza.com/',
    },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-32 px-12 bg-black text-white">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold uppercase mb-12 flex items-center gap-3"
      >
        <span className="text-[#7f34b4]">■</span> Projetos
      </motion.h2>

      {/* Grid de projetos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projetos.map((projeto, index) => (
          <motion.a
            key={index}
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="relative w-full md:h-[26rem] h-[18rem]">
              <Image
                src={projeto.image}
                alt={projeto.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{projeto.title}</h3>
              <p className="text-black">{projeto.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
