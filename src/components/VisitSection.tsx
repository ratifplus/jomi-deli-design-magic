import { MapPin, Clock, Euro } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "11am – 5pm" },
  { day: "Thursday", time: "11am – 5pm" },
  { day: "Friday", time: "11am – 5pm" },
  { day: "Saturday", time: "11am – 5pm" },
  { day: "Sunday", time: "11am – 2pm" },
];

const VisitSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="visit" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className={`text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Find Us
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Visit Us
        </h2>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Address</h3>
                <p className="font-body text-muted-foreground">Johannesstraße 65<br />70176 Stuttgart<br />Germany</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-3">Opening Hours</h3>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between font-body text-sm max-w-xs">
                      <span className={h.time === "Closed" ? "text-muted-foreground" : "text-foreground"}>{h.day}</span>
                      <span className={h.time === "Closed" ? "text-muted-foreground" : "text-primary font-medium"}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Euro className="text-primary flex-shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">Price Range</h3>
                <p className="font-body text-muted-foreground">€10 – €20 per person</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.5!2d9.1656!3d48.7758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQ2JzMzLjAiTiA5wrAwOSc1Ni4yIkU!5e0!3m2!1sen!2sde!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="JOMI DELI location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
