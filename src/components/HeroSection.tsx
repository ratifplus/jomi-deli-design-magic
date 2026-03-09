import pulledPork from "@/assets/pulled-pork-bagel.jpg";
import { BotanicalTopLeft, BotanicalBottomRight } from "@/components/BotanicalDecor";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <BotanicalTopLeft />
      <BotanicalBottomRight />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-8 items-center relative z-10 pt-24 md:pt-0">
        {/* Left: Text */}
        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Stuttgart's Finest
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
            Artisan Bagels &{" "}
            <span className="text-gradient-gold">Specialty Coffee</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Handcrafted sourdough bagels, premium coffee, and authentic deli flavors in the heart of Stuttgart.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a href="/menu" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:brightness-110 transition-all rounded-full">
              View Menu
            </a>
            <a href="#visit" className="px-8 py-4 border border-primary text-foreground font-body font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all rounded-full">
              Visit Us
            </a>
          </div>
        </div>

        {/* Right: Large food image */}
        <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative w-[90%] md:w-full max-w-lg">
            <img
              src={pulledPork}
              alt="Artisan bagel"
              className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl border border-border"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-display text-lg font-bold">€10.90</p>
              <p className="font-body text-xs opacity-80">Pulled Pork Bagel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
