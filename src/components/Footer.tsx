import { Instagram } from "lucide-react";
import logo from "@/assets/jomi-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="JOMI DELI" className="h-8 rounded" />
          <span className="font-display text-lg font-bold">
            JOMI<span className="text-primary">_</span>DELI
          </span>
        </div>

        <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
          <a href="#visit" className="hover:text-foreground transition-colors">Visit Us</a>
          <a
            href="https://www.instagram.com/jomi_deli/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} JOMI_DELI — Artisan Bagels & Coffee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
