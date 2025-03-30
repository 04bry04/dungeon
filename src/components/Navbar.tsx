
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-fantasy-darkPurple/95 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Book className="h-8 w-8 text-fantasy-gold mr-2" />
          <span className="text-xl font-bold text-white">DungeonAI Master</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-fantasy-gold transition-colors">Fonctionnalités</a>
          <a href="#ai-master" className="text-white hover:text-fantasy-gold transition-colors">MJ IA</a>
          <a href="#screenshots" className="text-white hover:text-fantasy-gold transition-colors">Captures d'écran</a>
          <a href="#testimonials" className="text-white hover:text-fantasy-gold transition-colors">Témoignages</a>
        </div>
        
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-white self-center">{user?.pseudo}</span>
              <Button 
                onClick={() => navigate('/dashboard')}
                className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold cta-button"
              >
                Mon espace
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => navigate('/login')}
              >
                <LogIn size={18} className="mr-2" /> Se connecter
              </Button>
              <Button 
                className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold cta-button"
                onClick={() => navigate('/register')}
              >
                S'inscrire
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-fantasy-darkPurple/95 border-t border-fantasy-purple/20">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#features"
              className="text-white hover:text-fantasy-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a 
              href="#ai-master"
              className="text-white hover:text-fantasy-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              MJ IA
            </a>
            <a 
              href="#screenshots"
              className="text-white hover:text-fantasy-gold transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Captures d'écran
            </a>
            <a 
              href="#testimonials"
              className="text-white hover:text-fantasy-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            
            {isAuthenticated ? (
              <Button 
                onClick={() => {
                  navigate('/dashboard');
                  setIsMenuOpen(false);
                }}
                className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold w-full cta-button"
              >
                Mon espace
              </Button>
            ) : (
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10 w-full"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Se connecter
                </Button>
                <Button 
                  className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold w-full cta-button"
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                >
                  S'inscrire
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
