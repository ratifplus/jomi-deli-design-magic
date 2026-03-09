import pulledPork from "@/assets/pulled-pork-bagel.jpg";
import reuben from "@/assets/reuben-bagel.jpg";
import caprese from "@/assets/caprese-bagel.jpg";
import espresso from "@/assets/espresso.jpg";
import tea from "@/assets/tea.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BotanicalDivider } from "@/components/BotanicalDecor";

const favorites = [
  { name: "Pulled Pork", desc: "Smoky BBQ, coleslaw, roasted onions", price: "€10.90", img: pulledPork },
  { name: "Reuben Style", desc: "Pastrami, sauerkraut, alpine cheese", price: "€12.90", img: reuben },
  { name: "Caprese", desc: "Mozzarella, pesto, balsamic", price: "€9.90", img: caprese },
  { name: "Espresso", desc: "Rich, bold, freshly pulled", price: "€2.10", img: espresso },
  { name: "Artisan Tea", desc: "Herbal blends, served hot", price: "€3.40", img: tea },
];

const FeaturedSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p className={`text-primary font-body text-sm tracking-[0.3em] uppercase mb-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Our Selection
          </p>
          <h2 className={`font-display text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Team's Choice
          </h2>
        </div>

        <BotanicalDivider />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
          {favorites.map((item, i) => (
            <div
              key={item.name}
              className={`text-center group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-500 mb-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="font-display text-base font-semibold mb-1">{item.name}</h3>
              <p className="text-muted-foreground font-body text-xs mb-1">{item.desc}</p>
              <span className="text-primary font-body font-bold text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
