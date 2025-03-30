
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignupForm from "@/components/SignupForm";
import FeaturesSection from "@/components/FeaturesSection";
import AIMasterSection from "@/components/AIMasterSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  // Fonction pour rediriger vers la page d'inscription
  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-fantasy-parchment overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <SignupForm onSignup={navigateToRegister} />
      </div>
      <FeaturesSection />
      <AIMasterSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <CallToAction onSignup={navigateToRegister} />
      <Footer />
    </div>
  );
};

export default Index;
