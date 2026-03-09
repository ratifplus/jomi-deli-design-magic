import founder from "@/assets/founder.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BotanicalTopRight, BotanicalBottomLeft } from "@/components/BotanicalDecor";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding bg-background relative overflow-hidden">
      <BotanicalTopRight />
      <BotanicalBottomLeft />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Bagels, Pies &<br /><span className="text-gradient-gold">Good Times.</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Born from a passion for real deli culture, JOMI_DELI brings the best of artisan bagel-making to Stuttgart. Every bagel is handcrafted from sourdough, baked fresh daily, and topped with premium, locally-sourced ingredients.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our mission is simple: serve honest, delicious food in a space that feels like home. Whether you're grabbing a quick espresso or settling in for a lazy Saturday brunch, JOMI is your place.
            </p>
            <a href="/menu" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:brightness-110 transition-all">
              See Our Menu
            </a>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img src={founder} alt="JOMI DELI founder" className="w-full h-[420px] object-cover object-top" />
            </div>
            <div className="absolute -bottom-6 left-6 flex gap-3">
              <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <div className="text-xl font-display font-bold">100%</div>
                <div className="text-xs font-body opacity-80">Sourdough</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <div className="text-xl font-display font-bold">Fresh</div>
                <div className="text-xs font-body opacity-80">Baked Daily</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <div className="text-xl font-display font-bold">Local</div>
                <div className="text-xs font-body opacity-80">Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
