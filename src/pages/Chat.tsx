
import { useState, useRef, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, User, Users, Bot, Info, Pin, Search } from 'lucide-react';

// Données fictives pour les conversations
const mockConversations = [
  {
    id: 1,
    name: 'Groupe d\'aventure "Les Héros du Crépuscule"',
    type: 'group',
    participants: ['Thorin', 'Elindra', 'Grok', 'Lyra'],
    lastMessage: 'On se retrouve demain à 20h pour continuer l\'aventure ?',
    timestamp: '14:32',
    unread: 2,
  },
  {
    id: 2,
    name: 'IA Dungeon Master',
    type: 'ai',
    lastMessage: 'Votre groupe se tient devant l\'entrée d\'une ancienne crypte...',
    timestamp: '12:05',
    unread: 0,
  },
  {
    id: 3,
    name: 'Elindra Moonwhisper',
    type: 'user',
    lastMessage: 'J\'ai trouvé un nouveau sort intéressant pour mon personnage',
    timestamp: 'Hier',
    unread: 0,
  },
  {
    id: 4,
    name: 'Grok le Ravageur',
    type: 'user',
    lastMessage: 'GROK ÉCRASER ENNEMIS !',
    timestamp: 'Hier',
    unread: 1,
  },
  {
    id: 5,
    name: 'Support DungeonAI',
    type: 'support',
    lastMessage: 'N\'hésitez pas si vous avez d\'autres questions !',
    timestamp: '22/05',
    unread: 0,
  },
];

// Données fictives pour les messages
const mockMessages = [
  {
    id: 1,
    conversationId: 1,
    sender: 'Thorin',
    content: 'Salut tout le monde ! Prêts pour la prochaine session ?',
    timestamp: '2023-06-10 14:15',
    type: 'text',
  },
  {
    id: 2,
    conversationId: 1,
    sender: 'Elindra',
    content: 'Absolument ! J\'ai hâte de découvrir ce qui nous attend dans ce donjon.',
    timestamp: '2023-06-10 14:18',
    type: 'text',
  },
  {
    id: 3,
    conversationId: 1,
    sender: 'Grok',
    content: 'GROK PRÊT POUR ÉCRASER ENNEMIS !',
    timestamp: '2023-06-10 14:22',
    type: 'text',
  },
  {
    id: 4,
    conversationId: 1,
    sender: 'Lyra',
    content: 'J\'ai préparé quelques nouveaux sorts qui devraient nous être utiles. Est-ce que quelqu\'un a des potions de soin en stock ?',
    timestamp: '2023-06-10 14:25',
    type: 'text',
  },
  {
    id: 5,
    conversationId: 1,
    sender: 'Thorin',
    content: 'J\'en ai trois. On devrait peut-être faire un inventaire de groupe avant de commencer ?',
    timestamp: '2023-06-10 14:28',
    type: 'text',
  },
  {
    id: 6,
    conversationId: 1,
    sender: 'Lyra',
    content: 'Bonne idée. On pourrait aussi discuter de notre stratégie pour le boss final dont le MJ a parlé.',
    timestamp: '2023-06-10 14:30',
    type: 'text',
  },
  {
    id: 7,
    conversationId: 1,
    sender: 'Thorin',
    content: 'On se retrouve demain à 20h pour continuer l\'aventure ?',
    timestamp: '2023-06-10 14:32',
    type: 'text',
  },
];

const Chat = () => {
  const [activeConversation, setActiveConversation] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeConversation) {
      // Filtrer les messages de la conversation active
      const conversationMessages = mockMessages.filter(
        msg => msg.conversationId === activeConversation.id
      );
      setMessages(conversationMessages);
    }
  }, [activeConversation]);
  
  useEffect(() => {
    // Défilement automatique vers le bas lorsque de nouveaux messages sont ajoutés
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !activeConversation) return;
    
    const newMsg = {
      id: Date.now(),
      conversationId: activeConversation.id,
      sender: 'Vous',
      content: newMessage,
      timestamp: new Date().toISOString(),
      type: 'text',
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simuler une réponse après un court délai
    if (activeConversation.type === 'ai') {
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          conversationId: activeConversation.id,
          sender: 'IA Dungeon Master',
          content: "Je note votre intention. Que voulez-vous faire ensuite dans la crypte ? Les couloirs sombres s'étendent devant vous, et vous entendez un bruit étrange venant de la gauche.",
          timestamp: new Date().toISOString(),
          type: 'text',
        };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1500);
    }
  };
  
  const filteredConversations = mockConversations.filter(
    convo => convo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <AppLayout>
      <div className="h-[calc(100vh-185px)] bg-gray-50">
        <div className="container mx-auto h-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
            {/* Sidebar des conversations */}
            <div className="md:col-span-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-fantasy-darkPurple mb-3">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input 
                    placeholder="Rechercher..." 
                    className="pl-9 border-fantasy-purple/30 focus:border-fantasy-purple" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <div className="px-2 pt-2 border-b border-gray-100">
                  <TabsList className="w-full bg-gray-100 p-1">
                    <TabsTrigger value="all" className="flex-1 text-xs">
                      Tous
                    </TabsTrigger>
                    <TabsTrigger value="groups" className="flex-1 text-xs">
                      Groupes
                    </TabsTrigger>
                    <TabsTrigger value="direct" className="flex-1 text-xs">
                      Direct
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2">
                  <TabsContent value="all" className="h-full m-0">
                    <div className="space-y-1">
                      {filteredConversations.map(convo => (
                        <ConversationItem 
                          key={convo.id} 
                          conversation={convo} 
                          isActive={activeConversation?.id === convo.id}
                          onClick={() => setActiveConversation(convo)}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="groups" className="h-full m-0">
                    <div className="space-y-1">
                      {filteredConversations
                        .filter(convo => convo.type === 'group')
                        .map(convo => (
                          <ConversationItem 
                            key={convo.id} 
                            conversation={convo} 
                            isActive={activeConversation?.id === convo.id}
                            onClick={() => setActiveConversation(convo)}
                          />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="direct" className="h-full m-0">
                    <div className="space-y-1">
                      {filteredConversations
                        .filter(convo => convo.type === 'user' || convo.type === 'ai' || convo.type === 'support')
                        .map(convo => (
                          <ConversationItem 
                            key={convo.id} 
                            conversation={convo} 
                            isActive={activeConversation?.id === convo.id}
                            onClick={() => setActiveConversation(convo)}
                          />
                        ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            
            {/* Zone de chat */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {activeConversation ? (
                <>
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center">
                      <ConversationAvatar type={activeConversation.type} name={activeConversation.name} />
                      <div className="ml-2">
                        <h2 className="font-semibold text-fantasy-darkPurple">{activeConversation.name}</h2>
                        {activeConversation.type === 'group' && (
                          <p className="text-xs text-gray-500">
                            {activeConversation.participants?.length || 0} participants
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Button variant="ghost" size="icon" title="Informations">
                        <Info size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" title="Épingler la conversation">
                        <Pin size={18} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                    {messages.map(message => (
                      <MessageBubble key={message.id} message={message} isOwnMessage={message.sender === 'Vous'} />
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                  
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Tapez votre message..."
                        className="resize-none border-fantasy-purple/30 focus:border-fantasy-purple min-h-[80px]"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-fantasy-purple hover:bg-fantasy-purple/80 self-end"
                        disabled={newMessage.trim() === ''}
                      >
                        <Send size={18} />
                      </Button>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Appuyez sur Entrée pour envoyer, Maj+Entrée pour un saut de ligne
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center flex-col p-8">
                  <div className="w-16 h-16 rounded-full bg-fantasy-purple/10 flex items-center justify-center mb-4">
                    <MessageBubble size={32} className="text-fantasy-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-fantasy-darkPurple mb-2">Vos messages</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Sélectionnez une conversation pour voir les messages ou démarrez une nouvelle discussion avec vos compagnons d'aventure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const ConversationAvatar = ({ type, name }: { type: string; name: string }) => {
  let icon;
  let bgColor;
  
  switch (type) {
    case 'group':
      icon = <Users size={16} />;
      bgColor = 'bg-green-100 text-green-700';
      break;
    case 'ai':
      icon = <Bot size={16} />;
      bgColor = 'bg-blue-100 text-blue-700';
      break;
    case 'support':
      icon = <Info size={16} />;
      bgColor = 'bg-purple-100 text-purple-700';
      break;
    default:
      icon = <User size={16} />;
      bgColor = 'bg-gray-100 text-gray-700';
  }
  
  return (
    <Avatar>
      <AvatarImage src="" alt={name} />
      <AvatarFallback className={bgColor}>
        {icon}
      </AvatarFallback>
    </Avatar>
  );
};

const ConversationItem = ({ 
  conversation, 
  isActive, 
  onClick 
}: { 
  conversation: any; 
  isActive: boolean; 
  onClick: () => void; 
}) => {
  return (
    <div 
      className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
        isActive 
          ? 'bg-fantasy-purple/10 text-fantasy-darkPurple' 
          : 'hover:bg-gray-100 text-gray-800'
      }`}
      onClick={onClick}
    >
      <ConversationAvatar type={conversation.type} name={conversation.name} />
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="font-medium truncate">{conversation.name}</h4>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.timestamp}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
      </div>
      
      {conversation.unread > 0 && (
        <Badge variant="destructive" className="text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
          {conversation.unread}
        </Badge>
      )}
    </div>
  );
};

const MessageBubble = ({ message, isOwnMessage }: { message: any; isOwnMessage: boolean }) => {
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] ${isOwnMessage ? 'order-1' : 'order-2'}`}>
        {!isOwnMessage && (
          <div className="text-xs text-gray-500 mb-1 ml-1">{message.sender}</div>
        )}
        
        <div className={`p-3 rounded-lg ${
          isOwnMessage 
            ? 'bg-fantasy-purple text-white rounded-br-none' 
            : 'bg-white border border-gray-200 rounded-bl-none'
        }`}>
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
        </div>
        
        <div className={`text-xs text-gray-500 mt-1 ${isOwnMessage ? 'text-right mr-1' : 'ml-1'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Chat;
