import Navbar from "./components/Navbar";
import AboutSection from "./Sections/About";
import HomeSection from "./Sections/Home";
import ProjectsSection from "./Sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-900">
      <Navbar />

      <HomeSection />
      <AboutSection />
      <ProjectsSection />

      <section id="servicos" className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Serviços</h2>
      </section>

      <section id="contatos" className="h-screen bg-black flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Contatos</h2>
      </section>
    </main>
  );
}
