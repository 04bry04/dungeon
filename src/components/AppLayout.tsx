
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  LogOut, 
  User, 
  Home, 
  Shield, 
  Sword, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-fantasy-darkPurple text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-fantasy-gold mr-2" />
            <Link to="/app/dashboard" className="text-xl font-bold">DungeonAI Master</Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link to="/app/dashboard" className="text-white hover:text-fantasy-gold transition-colors">Tableau de bord</Link>
              <Link to="/app/characters" className="text-white hover:text-fantasy-gold transition-colors">Personnages</Link>
              <Link to="/app/sessions" className="text-white hover:text-fantasy-gold transition-colors">Sessions</Link>
              <a href="#" className="text-white hover:text-fantasy-gold transition-colors">Aide</a>
            </nav>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium hidden md:inline">{user?.pseudo}</span>
              <div className="w-8 h-8 bg-fantasy-purple rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                className="text-white hover:bg-fantasy-purple/20"
                title="Déconnexion"
              >
                <LogOut size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile navigation */}
      <div className="md:hidden bg-fantasy-purple text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between">
            <Link to="/app/dashboard" className="flex flex-col items-center px-4 py-1">
              <Home size={16} />
              <span className="text-xs mt-1">Accueil</span>
            </Link>
            <Link to="/app/characters" className="flex flex-col items-center px-4 py-1">
              <Shield size={16} />
              <span className="text-xs mt-1">Personnages</span>
            </Link>
            <Link to="/app/sessions" className="flex flex-col items-center px-4 py-1">
              <Sword size={16} />
              <span className="text-xs mt-1">Sessions</span>
            </Link>
            <Link to="/app/chat" className="flex flex-col items-center px-4 py-1">
              <MessageSquare size={16} />
              <span className="text-xs mt-1">Messages</span>
            </Link>
            <Link to="/app/help" className="flex flex-col items-center px-4 py-1">
              <HelpCircle size={16} />
              <span className="text-xs mt-1">Aide</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2023 DungeonAI Master - Une application de jeu de rôle propulsée par l'IA</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
