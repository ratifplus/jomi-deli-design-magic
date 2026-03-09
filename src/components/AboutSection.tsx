import founder from "@/assets/founder.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`overflow-hidden rounded-lg transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <img src={founder} alt="JOMI DELI founder" className="w-full h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
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
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-display font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground font-body">Sourdough</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">Fresh</div>
              <div className="text-sm text-muted-foreground font-body">Baked Daily</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">Local</div>
              <div className="text-sm text-muted-foreground font-body">Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
