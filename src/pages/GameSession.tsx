
import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Send, 
  Users, 
  Sword, 
  Map, 
  Settings, 
  User,
  Dice6,
  MessageSquare,
  Crown,
  Shield 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

// Type pour les messages du chat
type MessageType = {
  id: number;
  sender: string;
  content: string;
  type: 'player' | 'gm' | 'system' | 'roll';
  timestamp: Date;
};

// Données fictives pour la session
const sessionMock = {
  id: 1,
  name: "La Crypte des Ombres",
  description: "Une aventure dans les profondeurs d'une crypte ancestrale, où des secrets et des trésors vous attendent.",
  players: [
    { id: 1, name: "Thorin", race: "Nain", class: "Guerrier", isOnline: true },
    { id: 2, name: "Elindra", race: "Elfe", class: "Magicienne", isOnline: true },
    { id: 3, name: "Galamir", race: "Humain", class: "Paladin", isOnline: false },
  ],
};

// Données fictives pour les PNJ
const npcMock = [
  { id: 1, name: "Eldon le tavernier", type: "Humain", location: "Taverne du Dragon Ivre" },
  { id: 2, name: "Garde Mathias", type: "Humain", location: "Entrée du village" },
  { id: 3, name: "Orla la marchande", type: "Naine", location: "Marché central" },
];

// Données fictives pour les lieux
const locationsMock = [
  { id: 1, name: "Village de Ravenholm", description: "Un petit village paisible à la lisière de la forêt." },
  { id: 2, name: "Crypte des Ombres", description: "Une crypte ancienne aux profondeurs inexplorées." },
  { id: 3, name: "Forêt des Murmures", description: "Une forêt dense où les arbres semblent chuchoter." },
];

// Données initiales pour les messages
const initialMessages: MessageType[] = [
  {
    id: 1,
    sender: "Maître du Jeu",
    content: "Bienvenue dans la Crypte des Ombres, aventuriers. Vous vous tenez à l'entrée d'une antique structure de pierre. L'air est frais et humide, et des torches fixées aux murs projettent des ombres dansantes sur les parois de pierre. Que souhaitez-vous faire ?",
    type: "gm",
    timestamp: new Date(),
  },
  {
    id: 2,
    sender: "Système",
    content: "La session a commencé. Bonne aventure !",
    type: "system",
    timestamp: new Date(),
  },
];

// Fonction pour simuler une réponse de l'IA
const simulateAIResponse = async (message: string): Promise<string> => {
  // Simulation d'une requête API
  console.log("Message envoyé à l'IA:", message);
  
  // Délai simulé pour la réponse
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Réponses prédéfinies basées sur des mots clés simples
  if (message.toLowerCase().includes("crypte") || message.toLowerCase().includes("structure")) {
    return "La crypte semble dater de plusieurs siècles. Les symboles gravés sur les murs évoquent l'ancien culte de Myrkul, dieu de la mort. Vous remarquez des traces récentes sur le sol poussiéreux, indiquant que quelqu'un est entré récemment.";
  } else if (message.toLowerCase().includes("entrer") || message.toLowerCase().includes("avancer")) {
    return "Vous avancez prudemment dans le couloir principal. Les torches s'espacent, laissant place à une obscurité grandissante. Au bout de quelques mètres, le couloir se divise en deux branches. Celle de gauche descend légèrement, tandis que celle de droite reste au même niveau mais semble plus étroite.";
  } else if (message.toLowerCase().includes("examiner") || message.toLowerCase().includes("regarder")) {
    return "En examinant attentivement les alentours, vous remarquez de petites niches dans les murs, contenant des urnes funéraires. Certaines sont intactes, d'autres brisées. Un symbole revient régulièrement : un crâne entouré d'un cercle de runes.";
  } else if (message.toLowerCase().includes("pnj") || message.toLowerCase().includes("personne")) {
    return "Vous ne voyez personne dans les environs immédiats de la crypte. Cependant, en tendant l'oreille, vous percevez ce qui ressemble à un léger grattement provenant des profondeurs du passage.";
  } else {
    return "Le silence de la crypte est troublant, interrompu seulement par le crépitement des torches et le bruit de vos pas. Chaque décision que vous prendrez pourrait vous mener à des trésors anciens... ou à des dangers oubliés.";
  }
};

// Composant pour la session de jeu
const GameSession = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll automatique vers le bas à chaque nouveau message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Gestion de l'envoi de message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Ajouter le message du joueur
    const playerMessage: MessageType = {
      id: Date.now(),
      sender: user?.pseudo || "Joueur",
      content: inputMessage,
      type: "player",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, playerMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Obtenir la réponse de l'IA
      const aiResponse = await simulateAIResponse(inputMessage);
      
      // Ajouter la réponse de l'IA
      const gmMessage: MessageType = {
        id: Date.now() + 1,
        sender: "Maître du Jeu",
        content: aiResponse,
        type: "gm",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, gmMessage]);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'IA:", error);
      toast({
        variant: "destructive",
        title: "Erreur de communication",
        description: "Impossible de contacter le Maître du Jeu IA.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Lancer un dé (simulé)
  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    
    const rollMessage: MessageType = {
      id: Date.now(),
      sender: user?.pseudo || "Joueur",
      content: `a lancé un d${sides} et obtenu ${result}`,
      type: "roll",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, rollMessage]);
  };
  
  return (
    <div className="flex h-screen bg-fantasy-parchment overflow-hidden">
      {/* Barre latérale */}
      <div className="w-16 bg-fantasy-darkPurple flex flex-col items-center pt-4">
        <div className="text-fantasy-gold mb-8">
          <BookOpen size={28} />
        </div>
        
        <div className="flex flex-col space-y-6 items-center">
          <button className="p-2 rounded-lg text-white hover:bg-fantasy-purple/30 transition">
            <Users size={24} />
          </button>
          <button className="p-2 rounded-lg text-white hover:bg-fantasy-purple/30 transition">
            <Sword size={24} />
          </button>
          <button className="p-2 rounded-lg text-white hover:bg-fantasy-purple/30 transition">
            <Map size={24} />
          </button>
          <button className="p-2 rounded-lg text-white hover:bg-fantasy-purple/30 transition">
            <MessageSquare size={24} />
          </button>
        </div>
        
        <div className="mt-auto mb-4">
          <button 
            className="p-2 rounded-lg text-white hover:bg-fantasy-purple/30 transition"
            onClick={() => navigate('/dashboard')}
          >
            <Settings size={24} />
          </button>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Zone de chat et de jeu */}
        <div className="flex-1 flex flex-col">
          {/* Entête de session */}
          <div className="bg-fantasy-purple text-white p-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold">{sessionMock.name}</h1>
                <p className="text-sm opacity-80">Session #{sessionId}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {sessionMock.players.filter(p => p.isOnline).slice(0, 3).map(player => (
                    <div 
                      key={player.id} 
                      className="w-8 h-8 rounded-full bg-fantasy-gold flex items-center justify-center border-2 border-fantasy-purple"
                      title={player.name}
                    >
                      <User size={16} />
                    </div>
                  ))}
                </div>
                <span className="text-sm">{sessionMock.players.filter(p => p.isOnline).length} connectés</span>
              </div>
            </div>
          </div>
          
          {/* Zone des messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-white/80">
            <div className="space-y-4">
              {messages.map(message => (
                <div key={message.id} className={`
                  ${message.type === 'gm' ? 'bg-fantasy-purple/10 border-l-4 border-fantasy-purple' : ''} 
                  ${message.type === 'player' ? 'bg-white' : ''} 
                  ${message.type === 'system' ? 'bg-gray-100 text-center text-sm' : ''} 
                  ${message.type === 'roll' ? 'bg-fantasy-gold/10 border-l-4 border-fantasy-gold text-sm italic' : ''} 
                  p-3 rounded-md
                `}>
                  {message.type !== 'system' && (
                    <div className="font-bold mb-1 flex items-center">
                      {message.type === 'gm' && <Crown size={16} className="mr-2 text-fantasy-purple" />}
                      {message.type === 'player' && <User size={16} className="mr-2 text-fantasy-darkPurple" />}
                      {message.sender}
                    </div>
                  )}
                  <div className={`${message.type === 'system' ? 'text-gray-600' : ''}`}>
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Zone de dés et saisie de message */}
          <div className="bg-white p-3 border-t border-gray-200">
            <div className="flex space-x-2 mb-3 overflow-x-auto pb-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(4)}
              >
                <Dice6 size={16} className="mr-1" /> d4
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(6)}
              >
                <Dice6 size={16} className="mr-1" /> d6
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(8)}
              >
                <Dice6 size={16} className="mr-1" /> d8
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(10)}
              >
                <Dice6 size={16} className="mr-1" /> d10
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(12)}
              >
                <Dice6 size={16} className="mr-1" /> d12
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(20)}
              >
                <Dice6 size={16} className="mr-1" /> d20
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => rollDice(100)}
              >
                <Dice6 size={16} className="mr-1" /> d100
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Décrivez votre action..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-fantasy-purple hover:bg-fantasy-purple/80"
              >
                {isLoading ? "..." : <Send size={18} />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Panneau d'informations */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <Tabs defaultValue="players">
            <TabsList className="w-full">
              <TabsTrigger value="players" className="flex-1">Joueurs</TabsTrigger>
              <TabsTrigger value="npcs" className="flex-1">PNJ</TabsTrigger>
              <TabsTrigger value="locations" className="flex-1">Lieux</TabsTrigger>
            </TabsList>
            
            <TabsContent value="players" className="p-4 space-y-3">
              {sessionMock.players.map(player => (
                <Card key={player.id} className={`p-3 ${player.isOnline ? '' : 'opacity-60'}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-fantasy-purple flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.race} • {player.class}</div>
                    </div>
                    <div className="ml-auto">
                      {player.isOnline ? (
                        <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                      ) : (
                        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="npcs" className="p-4 space-y-3">
              {npcMock.map(npc => (
                <Card key={npc.id} className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-fantasy-gold flex items-center justify-center">
                      <Crown size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">{npc.name}</div>
                      <div className="text-sm text-gray-600">{npc.type} • {npc.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="locations" className="p-4 space-y-3">
              {locationsMock.map(location => (
                <Card key={location.id} className="p-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-fantasy-darkPurple flex items-center justify-center mt-1">
                      <Map size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold">{location.name}</div>
                      <div className="text-sm text-gray-600">{location.description}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
          
          <div className="p-4 border-t border-gray-200">
            <h3 className="font-bold mb-2 flex items-center">
              <Shield size={16} className="mr-2 text-fantasy-darkPurple" />
              Votre personnage
            </h3>
            <div className="text-sm">
              <div className="font-medium">Thorin</div>
              <div className="text-gray-600">Nain • Guerrier • Niveau 5</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="font-medium">FOR</div>
                  <div>16</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">DEX</div>
                  <div>12</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">CON</div>
                  <div>18</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">INT</div>
                  <div>10</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">SAG</div>
                  <div>13</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">CHA</div>
                  <div>8</div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between">
                  <span>PV:</span>
                  <span>45/45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSession;
