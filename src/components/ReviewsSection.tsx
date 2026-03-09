import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cafeInterior from "@/assets/cafe-interior.jpg";

const reviews = [
  { name: "Anna M.", text: "Great food, great music, chill atmosphere. My favorite spot in Stuttgart!", time: "2 weeks ago" },
  { name: "Lukas K.", text: "One of the best food spots in Stuttgart. The bagels are next level.", time: "1 month ago" },
  { name: "Sarah T.", text: "The pulled pork bagel was absolutely amazing. Will come back every week!", time: "3 weeks ago" },
  { name: "Marco R.", text: "Incredible coffee and the Reuben is unreal. Best deli in the city, hands down.", time: "1 week ago" },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Get visible cards (show 3 at a time, sliding window)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % reviews.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Blurred background image */}
      <div className="absolute inset-0">
        <img
          src={cafeInterior}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "blur(6px) brightness(0.4)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={`font-body text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ color: "hsl(48 100% 50%)" }}
          >
            Testimonials
          </p>

          {/* Stars */}
          <div className={`flex justify-center gap-1 mb-3 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-[hsl(48,100%,50%)] text-[hsl(48,100%,50%)]" />
            ))}
          </div>

          <p className={`font-display text-6xl md:text-7xl font-bold text-white mb-2 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            4.8
          </p>
          <p className={`font-body text-sm text-white/60 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Google Rating · 128 Reviews
          </p>
        </div>

        {/* Sliding review cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {visibleIndices.map((idx, pos) => {
            const review = reviews[idx];
            return (
              <div
                key={`${idx}-${activeIndex}`}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 animate-slide-in-card"
                style={{ animationDelay: `${pos * 100}ms` }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <span className="font-display text-4xl font-bold" style={{ color: "hsl(48 100% 50%)" }}>
                    ❝
                  </span>
                </div>

                <p className="font-body text-white/90 text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-sm" style={{ color: "hsl(48 100% 50%)" }}>
                    {review.name}
                  </span>
                  <span className="font-body text-xs text-white/40">
                    {review.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "scale-125" : "bg-white/30 hover:bg-white/50"}`}
              style={i === activeIndex ? { backgroundColor: "hsl(48 100% 50%)" } : {}}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
