import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue">
      <Navigation />
      <Hero />
      <Programs />
      <Services />
    </div>
  );
};

export default Index;
