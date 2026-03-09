import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anna M.",
    text: "Great food, great music, chill atmosphere. The caprese bagel is a must-try!",
    rating: 5,
  },
  {
    name: "Lukas T.",
    text: "One of the best food spots in Stuttgart. The pulled pork bagel was amazing.",
    rating: 5,
  },
  {
    name: "Sophie K.",
    text: "Incredible coffee and the bagels are next level. Cozy vibes every time.",
    rating: 5,
  },
  {
    name: "Marco R.",
    text: "The Reuben Style is unreal. Best deli experience in the city, hands down.",
    rating: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">
          What People Say
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Reviews
        </h2>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>
          <span className="font-body text-foreground font-semibold">4.8</span>
          <span className="text-muted-foreground font-body text-sm">(128 Reviews)</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <div className="flex mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground italic mb-4">"{r.text}"</p>
              <p className="font-body text-muted-foreground text-sm font-medium">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
