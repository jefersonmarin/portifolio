'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'sobre', 'projetos', 'servicos', 'contatos'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sec);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWhiteBackground = ['sobre', 'servicos'].includes(activeSection);

  const navLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'contatos', label: 'Contatos' },
  ];

  return (
    <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-md transition-all duration-500`}
        >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* LOGO */}
            <Link href="#home" className="block">
            <Image
                src={logo}
                alt="Logo JM Next Web"
                width={220}
                height={80}
                className="object-contain"
            />
            </Link>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
                <a
                key={link.id}
                href={`#${link.id}`}
                className="text-white text-lg font-medium hover:text-blue-500 transition-colors"
                >
                {link.label}
                </a>
            ))}
            </div>

            {/* BOTÃO HAMBÚRGUER (MOBILE) */}
            <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
            >
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
            {menuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="md:hidden absolute top-16 left-0 w-full bg-black text-white border-t border-zinc-800"
            >
                <div className="flex flex-col items-center py-6 space-y-4">
                {navLinks.map((link) => (
                    <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium hover:text-blue-500 transition-colors"
                    >
                    {link.label}
                    </a>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </motion.nav>

  );
}
