import heroBg from "@/assets/hero-bg.jpg";
import espresso from "@/assets/espresso.jpg";
import { BotanicalTopLeft, BotanicalTopRight, SmallLeaf } from "@/components/BotanicalDecor";

const features = [
  {
    title: "A Space to Savor",
    desc: "Not just Wi-Fi and coffee — we offer interior warmth and authentic deli flavors.",
  },
  {
    title: "We serve courage by the cup.",
    desc: "Fuel for the Mind, Not Just the Body.",
  },
  {
    title: "It's a Creative Network",
    desc: "Where strangers become collaborators over artisan bagels.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-secondary">
      {/* Botanical shadows */}
      <BotanicalTopLeft />
      <BotanicalTopRight />

      {/* Decorative leaf shadows overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 opacity-[0.06] text-foreground">
          <SmallLeaf className="w-40 h-40 rotate-[-30deg]" />
        </div>
        <div className="absolute top-40 right-20 opacity-[0.05] text-foreground">
          <SmallLeaf className="w-32 h-32 rotate-[20deg]" />
        </div>
        <div className="absolute bottom-40 left-1/3 opacity-[0.04] text-foreground">
          <SmallLeaf className="w-48 h-48 rotate-[45deg]" />
        </div>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex items-center relative z-10 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-foreground/60 font-body text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Welcome to
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 animate-fade-in-up text-foreground italic">
              JOMI DELI
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-sm mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Brewed for the Bold. Handcrafted sourdough bagels and specialty coffee in the heart of Stuttgart.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="/menu" className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold tracking-wide hover:brightness-110 transition-all rounded-full text-sm">
                View Menu
              </a>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <p className="font-display text-3xl font-bold text-foreground">Over 100+</p>
              <p className="font-body text-sm text-muted-foreground">Returning customers</p>
            </div>
          </div>

          {/* Right: Large food image */}
          <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-[90%] md:w-full max-w-lg">
              <img
                src={heroBg}
                alt="Artisan coffee and bagels"
                className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border border-border"
              />
              {/* Small floating accent image */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-secondary">
                <img src={espresso} alt="Espresso" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards at bottom */}
      <div className="relative z-10 px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-primary text-primary-foreground rounded-2xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${0.7 + i * 0.15}s` }}
            >
              <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
              <p className="font-body text-xs opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
