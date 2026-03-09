const MenuCategory = ({ title, items }: { title: string; items: { name: string; desc?: string; price: string }[] }) => (
  <div className="mb-12">
    <h3 className="font-display text-2xl font-bold mb-6 text-primary">{title}</h3>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.name} className="flex justify-between items-baseline gap-4 group">
          <div className="flex-1">
            <span className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </span>
            {item.desc && (
              <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
            )}
          </div>
          <div className="flex-shrink-0 border-b border-dotted border-border flex-1 mx-2 hidden sm:block" />
          <span className="text-primary font-body font-semibold">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">
          What We Serve
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16">
          <div>
            <MenuCategory
              title="Classic Bagels"
              items={[
                { name: "Hausgebeizter Lachs", desc: "Fresh cheese, pickled onions, capers, lemon, dill", price: "€11.90" },
                { name: "Ohne Lachs", desc: "Same but without salmon", price: "€7.90" },
                { name: "Reuben Style", desc: "Pastrami, sauerkraut, Dijon mayo, alpine cheese", price: "€12.90" },
                { name: "Caprese", desc: "Mozzarella, pesto, tomatoes, balsamic reduction", price: "€9.90" },
              ]}
            />
            <MenuCategory
              title="Special Bagels"
              items={[
                { name: "Pulled Pork", desc: "Smoky BBQ pulled pork, coleslaw, roasted onions", price: "€10.90" },
                { name: "Pulled Mushroom", desc: "Garlic miso mayo, ginger carrots", price: "€10.90" },
                { name: "Feige(s) Schaf", desc: "Sheep brie, fig chutney, walnuts", price: "€10.90" },
              ]}
            />
            <MenuCategory
              title="Sourdough Bagels"
              items={[
                { name: "Plain / Sesame / Lye / Everything", price: "€2.00" },
              ]}
            />
            <MenuCategory
              title="Dips"
              items={[
                { name: "Jomi Herb Cream Cheese", price: "€2.50" },
              ]}
            />
          </div>

          <div>
            <MenuCategory
              title="Hot Drinks"
              items={[
                { name: "Espresso", price: "€2.10" },
                { name: "Americano", price: "€3.00" },
                { name: "Cappuccino", price: "€3.50" },
                { name: "Latte Macchiato", price: "€4.00" },
                { name: "Flat White", price: "€4.00" },
                { name: "Cocoa", price: "€4.00" },
                { name: "Tea", price: "€3.40" },
              ]}
            />
            <MenuCategory
              title="Special Drinks"
              items={[
                { name: "Crème Brûlée Latte", price: "€6.00" },
                { name: "Masala Chai Latte", price: "€4.50" },
                { name: "Dirty Chai Latte", price: "€5.50" },
              ]}
            />
            <MenuCategory
              title="Cold Drinks"
              items={[
                { name: "Elephant Bay / Stuggi Schorle", price: "€3.30" },
                { name: "Coca Cola", price: "€3.00" },
                { name: "Mineral Water", price: "€2.50" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
