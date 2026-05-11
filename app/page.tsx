"use client";

import { useEffect } from "react";
import HeroSection        from "@/app/components/HeroSection";
import EmpresasStrip      from "@/app/components/EmpresasStrip";
import ServiciosSection   from "@/app/components/ServiciosSection";
import PorQueSection      from "@/app/components/PorQueSection";
import MetricasSection    from "@/app/components/MetricasSection";
import TestimoniosSection from "@/app/components/TestimoniosSection";
import Footer             from "@/app/components/Footer";

export default function HomePage() {
  // Intersection Observer — triggers .reveal animations
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <HeroSection />
      <EmpresasStrip />
      <ServiciosSection />
      <PorQueSection />
      <MetricasSection />
      <TestimoniosSection />
      <Footer />
    </main>
  );
}
