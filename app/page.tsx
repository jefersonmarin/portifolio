import Navbar from "./components/Navbar";
import AboutSection from "./Sections/About";
import ContactSection from "./Sections/Contact";
import HomeSection from "./Sections/Home";
import ProjectsSection from "./Sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-900">
      <Navbar />

      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
