import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import caprese from "@/assets/caprese-bagel.jpg";

const reviews = [
  { name: "Anna M.", text: "Great food, great music, chill atmosphere. The caprese bagel is a must-try!", rating: 5 },
  { name: "Lukas T.", text: "One of the best food spots in Stuttgart. The pulled pork bagel was amazing.", rating: 5 },
  { name: "Sophie K.", text: "Incredible coffee and the bagels are next level. Cozy vibes every time.", rating: 5 },
  { name: "Marco R.", text: "The Reuben Style is unreal. Best deli experience in the city, hands down.", rating: 4 },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className={`text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          What People Say
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Customer Feedback
        </h2>

        {/* Featured review card — like reference */}
        <div className={`bg-secondary rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="overflow-hidden rounded-xl">
            <img src={caprese} alt="Caprese bagel" className="w-full h-[300px] object-cover" />
          </div>
          <div>
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
              <Quote size={18} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Unforgettable Taste</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Best bagels we've ever had in Stuttgart. Fresh ingredients, incredible flavor combinations, and the coffee is top-notch. A must-visit for anyone who loves real food.
            </p>
            <a href="#menu" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full text-sm hover:brightness-110 transition-all">
              Explore Menu
            </a>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground text-sm italic mb-3">"{r.text}"</p>
              <p className="font-body text-muted-foreground text-xs font-medium">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
