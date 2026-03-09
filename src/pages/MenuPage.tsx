import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BotanicalTopRight, BotanicalBottomLeft } from "@/components/BotanicalDecor";

const MenuPage = () => {
  return (
    <div className="bg-background min-h-screen relative">
      <BotanicalTopRight />
      <BotanicalBottomLeft />
      <Navbar />
      <div className="pt-24">
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
