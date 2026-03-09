import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <InstagramSection />
      <VisitSection />
      <Footer />
    </div>
  );
};

export default Index;
