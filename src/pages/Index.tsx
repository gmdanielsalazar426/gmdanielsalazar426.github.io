import Hero from "@/components/Hero";
import QuickNav from "@/components/QuickNav";
import Stats from "@/components/Stats";
import WhyEIA from "@/components/WhyEIA";
import Programs from "@/components/Programs";
import Scholarships from "@/components/Scholarships";
import Financing from "@/components/Financing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickNav />
      <Stats />
      <WhyEIA />
      <Programs />
      <Scholarships />
      <Financing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
