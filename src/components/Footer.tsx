import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/jomi-logo.jpg";
import { BotanicalDivider } from "@/components/BotanicalDecor";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <BotanicalDivider />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JOMI DELI" className="h-8 rounded" />
          </div>

          <div className="flex items-center gap-6 font-body text-sm text-primary-foreground/70">
            <button onClick={() => navigate("/")} className="hover:text-primary-foreground transition-colors">Home</button>
            <button onClick={() => navigate("/menu")} className="hover:text-primary-foreground transition-colors">Menu</button>
            <button onClick={() => { navigate("/"); setTimeout(() => document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="hover:text-primary-foreground transition-colors">Visit Us</button>
            <a
              href="https://www.instagram.com/jomi_deli/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} JOMI_DELI — Artisan Bagels & Coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
