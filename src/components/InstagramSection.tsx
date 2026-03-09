import { Instagram } from "lucide-react";
import pulledPork from "@/assets/pulled-pork-bagel.jpg";
import reuben from "@/assets/reuben-bagel.jpg";
import caprese from "@/assets/caprese-bagel.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import founder from "@/assets/founder.jpeg";

const images = [pulledPork, reuben, caprese, heroBg, founder, pulledPork];

const InstagramSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
          @jomi_deli
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Follow Our Food Journey
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/jomi_deli/"
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={img}
                alt="JOMI DELI Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/jomi_deli/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded hover:brightness-110 transition-all"
        >
          <Instagram size={20} />
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
