
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface CallToActionProps {
  onSignup?: () => void;
}

const CallToAction = ({ onSignup }: CallToActionProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email soumis:', email);
    
    if (onSignup) {
      onSignup();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-fantasy-purple to-fantasy-darkPurple text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à commencer votre aventure ?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Rejoignez des milliers d'aventuriers et plongez dans un monde de possibilités infinies.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-fantasy-gold">Pourquoi nous rejoindre ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-fantasy-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>Accès à un MJ IA disponible 24h/24, 7j/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-fantasy-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>Campagnes personnalisées selon vos préférences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-fantasy-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>Outils de création de personnage avancés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-fantasy-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>Communauté active et passionnée</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fantasy-gold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold py-6 text-lg cta-button"
                  >
                    Commencer gratuitement
                  </Button>
                  <p className="text-sm text-white/60 text-center">
                    Accès gratuit pendant 14 jours, aucune carte de crédit requise.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
