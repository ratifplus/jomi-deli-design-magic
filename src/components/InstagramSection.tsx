import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import pulledPork from "@/assets/pulled-pork-bagel.jpg";
import reuben from "@/assets/reuben-bagel.jpg";
import caprese from "@/assets/caprese-bagel.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import founder from "@/assets/founder.jpeg";
import espresso from "@/assets/espresso.jpg";
import tea from "@/assets/tea.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BotanicalDivider } from "@/components/BotanicalDecor";

const allImages = [
  { src: pulledPork, label: "Pulled Pork Bagel" },
  { src: espresso, label: "Espresso" },
  { src: reuben, label: "Reuben Bagel" },
  { src: tea, label: "Artisan Tea" },
  { src: caprese, label: "Caprese Bagel" },
  { src: heroBg, label: "Café Vibes" },
  { src: founder, label: "Behind the Scenes" },
  { src: pulledPork, label: "Fresh from the Oven" },
];

const InstagramSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <p className={`text-primary font-body text-sm tracking-[0.3em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          @jomi_deli
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Follow Our Food Journey
        </h2>

        <BotanicalDivider />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 mt-8">
          {allImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/jomi_deli/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group aspect-square overflow-hidden rounded-lg relative transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${activeIndex === i ? "ring-2 ring-primary" : ""}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-primary/60 flex items-end p-3 transition-opacity duration-500 ${activeIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <span className="font-body text-xs text-primary-foreground font-medium">{img.label}</span>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/jomi_deli/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:brightness-110 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Instagram size={20} />
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
