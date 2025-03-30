
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import AppLayout from '@/components/AppLayout';
import { Plus, PlayCircle, LogOut } from 'lucide-react';

// Données fictives pour les personnages (à remplacer par des données réelles)
const mockCharacters = [
  { id: 1, name: 'Thorin', race: 'Nain', class: 'Guerrier', level: 5 },
  { id: 2, name: 'Elindra', race: 'Elfe', class: 'Magicienne', level: 4 },
];

// Données fictives pour les sessions (à remplacer par des données réelles)
const mockSessions = [
  { id: 1, name: 'La Crypte des Ombres', players: 3, status: 'En cours' },
  { id: 2, name: 'Le Donjon du Dragon Rouge', players: 4, status: 'En attente' },
];

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isLoading, isAuthenticated, navigate]);
  
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-fantasy-parchment flex items-center justify-center">
        <div className="animate-pulse text-fantasy-darkPurple">Chargement...</div>
      </div>
    );
  }
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple">
            Bienvenue, {user?.pseudo} !
          </h1>
          <p className="text-gray-600">Que souhaitez-vous faire aujourd'hui ?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Personnages */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-fantasy-purple/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-fantasy-darkPurple">Vos Personnages</h2>
              <Button 
                variant="outline" 
                className="border-fantasy-purple text-fantasy-purple hover:bg-fantasy-purple/10"
                onClick={() => navigate('/create-character')}
              >
                <Plus size={18} className="mr-1" /> Nouveau
              </Button>
            </div>
            
            {mockCharacters.length > 0 ? (
              <div className="space-y-4">
                {mockCharacters.map(character => (
                  <div
                    key={character.id}
                    className="flex justify-between items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => navigate(`/character/${character.id}`)}
                  >
                    <div>
                      <h3 className="font-bold text-fantasy-darkPurple">{character.name}</h3>
                      <p className="text-sm text-gray-600">
                        {character.race} • {character.class} • Niveau {character.level}
                      </p>
                    </div>
                    <Button size="sm" variant="ghost">Détails</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Vous n'avez pas encore de personnage</p>
                <Button 
                  onClick={() => navigate('/create-character')}
                  className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white"
                >
                  Créer mon premier personnage
                </Button>
              </div>
            )}
          </div>
          
          {/* Section Sessions */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-fantasy-purple/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-fantasy-darkPurple">Sessions de jeu</h2>
              <Button 
                variant="outline" 
                className="border-fantasy-purple text-fantasy-purple hover:bg-fantasy-purple/10"
              >
                <Plus size={18} className="mr-1" /> Créer
              </Button>
            </div>
            
            {mockSessions.length > 0 ? (
              <div className="space-y-4">
                {mockSessions.map(session => (
                  <div
                    key={session.id}
                    className="flex justify-between items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition"
                  >
                    <div>
                      <h3 className="font-bold text-fantasy-darkPurple">{session.name}</h3>
                      <p className="text-sm text-gray-600">
                        {session.players} joueurs • {session.status}
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/game-session/${session.id}`)}
                      className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple"
                    >
                      <PlayCircle size={16} className="mr-1" /> Jouer
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Aucune session de jeu disponible</p>
                <Button className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white">
                  Créer une session
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
