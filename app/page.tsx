"use client"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Research from "./components/Research";
import AcademicBackground from "./components/AcademicBackground";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar/>
      <Hero/>
      <AcademicBackground />
      <Research />
      <Projects />
      <Contact />
    </main>
  );
}
