
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialProps) => (
  <div className="testimonial-card bg-white/90 p-6 rounded-lg shadow-lg border border-fantasy-purple/20">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star 
          key={index}
          className={`h-5 w-5 ${
            index < rating ? 'text-fantasy-gold fill-fantasy-gold' : 'text-gray-300'
          }`} 
        />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6">"{content}"</p>
    <div className="border-t border-gray-200 pt-4">
      <h4 className="font-bold text-fantasy-darkPurple">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-fantasy-parchment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fantasy-darkPurple mb-4">
            Ce que disent nos aventuriers
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez les expériences de ceux qui ont déjà rejoint nos quêtes épiques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Thomas L."
            role="Joueur D&D depuis 8 ans"
            content="Le MJ IA crée des histoires plus riches et réactives que certains maîtres humains que j'ai rencontrés. C'est vraiment impressionnant de voir comment il s'adapte à nos actions!"
            rating={5}
          />
          
          <TestimonialCard 
            name="Sophie M."
            role="Nouvelle joueuse"
            content="J'avais peur de me lancer dans D&D car ça semblait complexe, mais avec cette app, j'ai pu commencer facilement. Le MJ IA m'a guidée tout au long de l'aventure!"
            rating={5}
          />
          
          <TestimonialCard 
            name="Marc D."
            role="MJ expérimenté"
            content="J'utilise l'application pour préparer mes propres sessions. Les idées générées par l'IA sont excellentes et m'aident à créer des aventures plus originales."
            rating={4}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
