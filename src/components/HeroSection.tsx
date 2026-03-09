import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Artisan bagels and coffee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Stuttgart's Finest
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up">
          Artisan Bagels &<br />
          <span className="text-gradient-gold">Specialty Coffee</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Handcrafted sourdough bagels, premium coffee, and authentic deli flavors in the heart of Stuttgart.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a href="#menu" className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:brightness-110 transition-all rounded">
            View Menu
          </a>
          <a href="#visit" className="px-8 py-4 border border-foreground/30 text-foreground font-body font-semibold tracking-wide hover:border-primary hover:text-primary transition-all rounded">
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
