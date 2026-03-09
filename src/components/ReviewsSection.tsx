import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Anna M.", text: "Great food, great music, chill atmosphere. The caprese bagel is a must-try!", rating: 5 },
  { name: "Lukas T.", text: "One of the best food spots in Stuttgart. The pulled pork bagel was amazing.", rating: 5 },
  { name: "Sophie K.", text: "Incredible coffee and the bagels are next level. Cozy vibes every time.", rating: 5 },
  { name: "Marco R.", text: "The Reuben Style is unreal. Best deli experience in the city, hands down.", rating: 4 },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const switchReview = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  }, [activeIndex]);

  // Auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = reviews[activeIndex];

  return (
    <section id="reviews" ref={ref} className="section-padding bg-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-primary font-body text-sm tracking-[0.3em] uppercase mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          What People Say
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Customer Reviews
        </h2>

        {/* Main animated review */}
        <div className={`min-h-[180px] flex flex-col items-center justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex mb-4">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </div>
          <p className={`font-display text-2xl md:text-3xl italic leading-relaxed max-w-2xl mb-6 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            "{active.text}"
          </p>
          <p className={`font-body text-muted-foreground text-sm font-medium transition-all duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            — {active.name}
          </p>
        </div>

        {/* Tap indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              onClick={() => switchReview(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"}`}
              aria-label={`Review by ${r.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
