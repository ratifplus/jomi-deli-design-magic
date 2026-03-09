import pulledPork from "@/assets/pulled-pork-bagel.jpg";
import reuben from "@/assets/reuben-bagel.jpg";
import caprese from "@/assets/caprese-bagel.jpg";

const favorites = [
  {
    name: "Pulled Pork Bagel",
    desc: "Smoky BBQ pulled pork, coleslaw, roasted onions",
    price: "€10.90",
    img: pulledPork,
  },
  {
    name: "Reuben Style Bagel",
    desc: "Pastrami, sauerkraut, Dijon mayo, alpine cheese",
    price: "€12.90",
    img: reuben,
  },
  {
    name: "Caprese Bagel",
    desc: "Mozzarella, pesto, tomatoes, balsamic reduction",
    price: "€9.90",
    img: caprese,
  },
];

const FeaturedSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">
          Our Selection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          Customer Favorites
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {favorites.map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-body font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
