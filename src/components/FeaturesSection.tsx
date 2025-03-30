
import { Users, BookOpen, MessageSquare, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card bg-white/90 p-6 rounded-lg shadow-lg border border-fantasy-purple/20">
    <div className="w-14 h-14 bg-fantasy-purple rounded-full flex items-center justify-center mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-fantasy-darkPurple text-center">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-fantasy-parchment to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fantasy-darkPurple mb-4">
            Fonctionnalités principales
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Notre application combine le meilleur des jeux de rôle traditionnels avec une technologie IA de pointe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Users className="h-7 w-7 text-white" />}
            title="Multijoueur"
            description="Jouez en temps réel avec vos amis, peu importe où ils se trouvent dans le monde."
          />
          
          <FeatureCard 
            icon={<BookOpen className="h-7 w-7 text-white" />}
            title="Création de personnage"
            description="Créez et personnalisez votre héros avec de nombreuses options et classes."
          />
          
          <FeatureCard 
            icon={<MessageSquare className="h-7 w-7 text-white" />}
            title="Chat immersif"
            description="Communiquez avec vos compagnons et les PNJ dans un chat riche en fonctionnalités."
          />
          
          <FeatureCard 
            icon={<Calendar className="h-7 w-7 text-white" />}
            title="Planification facile"
            description="Organisez vos sessions de jeu et synchronisez les disponibilités de votre groupe."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
