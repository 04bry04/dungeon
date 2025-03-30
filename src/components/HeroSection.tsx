
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToSignup = () => {
    const signupForm = document.querySelector('.container .scroll-container');
    if (signupForm) {
      signupForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center bg-hero-pattern pt-20">
      <div className="container mx-auto px-4 hero-content text-center py-20">
        <div className="animate-scale-up max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow leading-tight">
            Plongez dans des aventures épiques avec votre MJ IA !
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Créez, explorez et jouez à des campagnes Donjons & Dragons entièrement gérées par une IA intelligente. Votre prochaine quête légendaire vous attend...
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple text-lg py-6 px-8 font-semibold cta-button"
              onClick={navigateToRegister}
            >
              S'inscrire gratuitement
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 font-semibold"
              onClick={scrollToSignup}
            >
              En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-12 text-white/80 text-sm">
            Rejoignez plus de 10 000 joueurs déjà embarqués dans l'aventure !
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
