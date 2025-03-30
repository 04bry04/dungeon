
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format",
    alt: "Interface du maître de jeu IA",
    caption: "L'interface intuitive du Maître de Jeu IA"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format",
    alt: "Création de personnage",
    caption: "Créez votre héros avec des options détaillées"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format",
    alt: "Session multijoueur",
    caption: "Jouez avec vos amis en temps réel"
  }
];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-20 bg-fantasy-parchment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fantasy-darkPurple mb-4">
            Découvrez l'interface
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Une expérience utilisateur intuitive et immersive pour vos aventures
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg fantasy-border">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="w-full flex-shrink-0">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-[450px] object-cover" 
                  />
                  <div className="bg-fantasy-darkPurple/90 p-4 text-white text-center">
                    <p>{screenshot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 border-fantasy-purple hover:bg-white hover:border-fantasy-darkPurple text-fantasy-darkPurple rounded-full h-10 w-10 p-0"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 border-fantasy-purple hover:bg-white hover:border-fantasy-darkPurple text-fantasy-darkPurple rounded-full h-10 w-10 p-0"
            onClick={nextSlide}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? 'bg-fantasy-darkPurple' : 'bg-fantasy-purple/40'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
