'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarWhatsApp = () => {
    const numero = '555499180188'; // número do WhatsApp com DDD
    const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
  };

  return (
    <section id="contatos" className="py-32 px-6 md:px-12 bg-gray-50">
      
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-6xl font-bold uppercase mb-12 flex items-center gap-3"
      >
        <span className="text-[#7f34b4]">■</span> Entre em contato
      </motion.h2>

      {/* Formulário */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Sua mensagem"
          rows={5}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7f34b4]"
        />

        <button
          onClick={enviarWhatsApp}
          className="bg-[#7f34b4] text-white font-semibold py-3 rounded-md hover:bg-[#7f34b4] transition"
        >
          Enviar pelo WhatsApp
        </button>
      </motion.div>

    </section>
  );
}
