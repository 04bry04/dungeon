
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Shield, Sword, Book, Heart, Brain, Zap, Edit, Trash2 } from 'lucide-react';

// Données fictives pour les personnages (à remplacer par des données réelles)
const mockCharacters = [
  { 
    id: 1, 
    name: 'Thorin Oakenshield', 
    race: 'Nain', 
    class: 'Guerrier', 
    level: 5, 
    stats: { str: 16, dex: 12, con: 18, int: 10, wis: 12, cha: 8 },
    image: '/placeholder.svg'
  },
  { 
    id: 2, 
    name: 'Elindra Moonwhisper', 
    race: 'Elfe', 
    class: 'Magicienne', 
    level: 4, 
    stats: { str: 8, dex: 16, con: 12, int: 18, wis: 14, cha: 12 },
    image: '/placeholder.svg'
  },
  { 
    id: 3, 
    name: 'Grok le Ravageur', 
    race: 'Demi-Orc', 
    class: 'Barbare', 
    level: 3, 
    stats: { str: 18, dex: 14, con: 16, int: 8, wis: 10, cha: 8 },
    image: '/placeholder.svg'
  },
  { 
    id: 4, 
    name: 'Lyra Silvertongue', 
    race: 'Humaine', 
    class: 'Barde', 
    level: 4, 
    stats: { str: 10, dex: 14, con: 12, int: 14, wis: 12, cha: 18 },
    image: '/placeholder.svg'
  }
];

const StatIcon = ({ stat }: { stat: string }) => {
  switch(stat) {
    case 'str': return <Sword size={16} />;
    case 'dex': return <Zap size={16} />;
    case 'con': return <Heart size={16} />;
    case 'int': return <Book size={16} />;
    case 'wis': return <Brain size={16} />;
    case 'cha': return <Shield size={16} />;
    default: return null;
  }
};

const StatName = ({ stat }: { stat: string }) => {
  switch(stat) {
    case 'str': return 'Force';
    case 'dex': return 'Dextérité';
    case 'con': return 'Constitution';
    case 'int': return 'Intelligence';
    case 'wis': return 'Sagesse';
    case 'cha': return 'Charisme';
    default: return stat;
  }
};

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('all');
  
  const filteredCharacters = mockCharacters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.race.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.class.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-fantasy-darkPurple">Vos Personnages</h1>
            <p className="text-gray-600">Gérez vos héros et créez de nouvelles aventures</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-[280px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Rechercher un personnage..." 
                className="pl-10 border-fantasy-purple/30 focus:border-fantasy-purple"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={() => navigate('/create-character')}
              className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold"
            >
              <Plus size={18} className="mr-2" /> Nouveau personnage
            </Button>
          </div>
        </div>
        
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-8">
          <TabsList className="bg-white border border-fantasy-purple/20">
            <TabsTrigger value="all" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
              Tous
            </TabsTrigger>
            <TabsTrigger value="warriors" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
              Guerriers
            </TabsTrigger>
            <TabsTrigger value="mages" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
              Mages
            </TabsTrigger>
            <TabsTrigger value="rogues" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
              Roublards
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            {filteredCharacters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCharacters.map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500 mb-4">Aucun personnage ne correspond à votre recherche</p>
                {searchTerm ? (
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm('')}
                    className="border-fantasy-purple text-fantasy-purple hover:bg-fantasy-purple/10"
                  >
                    Effacer la recherche
                  </Button>
                ) : (
                  <Button 
                    onClick={() => navigate('/create-character')}
                    className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white"
                  >
                    Créer votre premier personnage
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="warriors" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCharacters
                .filter(char => ['Guerrier', 'Barbare', 'Paladin'].includes(char.class))
                .map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="mages" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCharacters
                .filter(char => ['Magicien', 'Magicienne', 'Sorcier', 'Sorcière', 'Druide'].includes(char.class))
                .map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="rogues" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCharacters
                .filter(char => ['Voleur', 'Rôdeur', 'Roublard', 'Barde'].includes(char.class))
                .map(character => (
                  <CharacterCard key={character.id} character={character} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

const CharacterCard = ({ character }: { character: any }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="overflow-hidden border-fantasy-purple/20 hover:shadow-md transition-shadow">
      <div className="aspect-square bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <Shield size={48} />
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-fantasy-darkPurple">{character.name}</CardTitle>
        <p className="text-sm text-gray-600">
          {character.race} • {character.class} • Niveau {character.level}
        </p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="grid grid-cols-3 gap-2">
          {Object.entries(character.stats).map(([stat, value]) => (
            <div 
              key={stat} 
              className="flex flex-col items-center justify-center bg-fantasy-parchment/50 rounded-md p-2 border border-fantasy-gold/10"
              title={StatName({ stat })}
            >
              <div className="flex items-center justify-center text-fantasy-purple mb-1">
                <StatIcon stat={stat} />
              </div>
              <span className="text-sm font-medium text-fantasy-darkPurple">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2 border-t border-gray-100">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-fantasy-purple hover:bg-fantasy-purple/10"
          onClick={() => navigate(`/character/${character.id}/edit`)}
        >
          <Edit size={16} className="mr-1" /> Modifier
        </Button>
        
        <Button 
          size="sm"
          className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple"
          onClick={() => navigate(`/character/${character.id}`)}
        >
          Détails
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Characters;
