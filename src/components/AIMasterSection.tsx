
import { Button } from '@/components/ui/button';

const AIMasterSection = () => {
  return (
    <section id="ai-master" className="py-20 bg-fantasy-darkPurple text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fantasy-gold">
              Gemini : Votre Maître de Jeu IA
            </h2>
            <p className="text-lg mb-6">
              Notre IA avancée génère des aventures dynamiques et réactives, adaptées à vos choix et actions. Chaque partie devient unique et personnalisée !
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fantasy-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fantasy-gold text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-fantasy-gold">Génération de scénarios</h3>
                  <p className="text-white/80">
                    Gemini crée des histoires complexes avec intrigues, rebondissements et PNJ mémorables.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fantasy-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fantasy-gold text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-fantasy-gold">Adaptation en temps réel</h3>
                  <p className="text-white/80">
                    L'IA ajuste l'histoire selon vos décisions, créant un monde véritablement réactif.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fantasy-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-fantasy-gold text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-fantasy-gold">Respect des règles D&D</h3>
                  <p className="text-white/80">
                    Gemini connaît parfaitement les règles officielles et les applique automatiquement.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-10 bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold py-6 px-8 cta-button">
              Découvrir les capacités de l'IA
            </Button>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 bg-fantasy-gold/20 rounded-lg blur-lg animate-pulse-gentle"></div>
              <div className="scroll-container p-8 relative">
                <div className="bg-fantasy-parchment p-6 rounded text-fantasy-darkPurple">
                  <p className="italic text-lg mb-4">
                    "Alors que vous pénétrez dans la caverne, la lumière de votre torche révèle des stalactites menaçantes. Un grondement sourd résonne dans l'obscurité..."
                  </p>
                  <p className="italic text-lg mb-4">
                    "Thalia, avec ta perception élevée, tu remarques des traces fraîches sur le sol humide. Quelque chose de grand s'est déplacé ici récemment."
                  </p>
                  <p className="italic text-lg">
                    "Que souhaitez-vous faire maintenant, aventuriers?"
                  </p>
                  <div className="mt-4 text-right text-sm text-fantasy-purple/80">
                    - Gemini, votre Maître de Jeu IA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMasterSection;
