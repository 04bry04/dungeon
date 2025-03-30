
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Search, Users, PlayCircle, Scroll, MapPin, Calendar, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Données fictives pour les sessions (à remplacer par des données réelles)
const mockSessions = [
  { 
    id: 1, 
    name: 'La Crypte des Ombres', 
    description: 'Explorez les profondeurs d\'une ancienne crypte hantée par des esprits malfaisants et découvrez ses trésors cachés.',
    dungeon_master: 'IA Dungeon Master',
    players: 3, 
    max_players: 5,
    location: 'Forêt des Murmures',
    created_at: '2023-06-01',
    next_session: '2023-06-15 20:00',
    status: 'active',
    image: '/placeholder.svg'
  },
  { 
    id: 2, 
    name: 'Le Donjon du Dragon Rouge', 
    description: 'Affrontez le redoutable Dragon Rouge et ses serviteurs pour mettre fin à sa tyrannie sur la vallée.',
    dungeon_master: 'IA Dungeon Master',
    players: 4, 
    max_players: 4,
    location: 'Montagnes de Feu',
    created_at: '2023-05-15',
    next_session: '2023-06-20 19:30',
    status: 'active',
    image: '/placeholder.svg'
  },
  { 
    id: 3, 
    name: 'Les Mines Perdues de Phandelver', 
    description: 'Une aventure classique de D&D adaptée pour les nouveaux joueurs, explorez les mines perdues et leurs secrets.',
    dungeon_master: 'IA Dungeon Master',
    players: 2, 
    max_players: 6,
    location: 'Côte des Épées',
    created_at: '2023-05-10',
    next_session: 'À déterminer',
    status: 'planning',
    image: '/placeholder.svg'
  },
  { 
    id: 4, 
    name: 'La Malédiction de Strahd', 
    description: 'Vous êtes piégés dans les brumes de Barovia, sous le regard du vampire Strahd. Pourrez-vous échapper à sa malédiction?',
    dungeon_master: 'IA Dungeon Master',
    players: 5, 
    max_players: 5,
    location: 'Barovia',
    created_at: '2023-04-20',
    next_session: '2023-06-18 14:00',
    status: 'active',
    image: '/placeholder.svg'
  },
];

// Données fictives pour les personnages des joueurs
const mockPlayerCharacters = [
  { id: 1, name: 'Thorin Oakenshield', class: 'Guerrier', level: 5 },
  { id: 2, name: 'Elindra Moonwhisper', class: 'Magicienne', level: 4 },
  { id: 3, name: 'Grok le Ravageur', class: 'Barbare', level: 3 },
];

const createSessionSchema = z.object({
  name: z.string().min(3, "Le nom de la session doit contenir au moins 3 caractères"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  max_players: z.number().min(2, "Minimum 2 joueurs").max(8, "Maximum 8 joueurs"),
  character_id: z.string().min(1, "Veuillez sélectionner un personnage"),
});

type CreateSessionData = z.infer<typeof createSessionSchema>;

const Sessions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<CreateSessionData>({
    resolver: zodResolver(createSessionSchema),
    defaultValues: {
      name: '',
      description: '',
      max_players: 4,
      character_id: '',
    },
  });
  
  const filteredSessions = mockSessions.filter(session => 
    session.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const onSubmit = (data: CreateSessionData) => {
    console.log('Form data submitted:', data);
    // Simuler la création d'une session
    setTimeout(() => {
      toast({
        title: "Session créée !",
        description: `La session "${data.name}" a été créée avec succès.`,
      });
      setIsDialogOpen(false);
      form.reset();
    }, 1000);
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-fantasy-darkPurple">Sessions de jeu</h1>
            <p className="text-gray-600">Rejoignez des aventures ou créez votre propre campagne</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-[280px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Rechercher une session..." 
                className="pl-10 border-fantasy-purple/30 focus:border-fantasy-purple"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold"
                >
                  <Plus size={18} className="mr-2" /> Nouvelle session
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-fantasy-darkPurple">Créer une nouvelle session</DialogTitle>
                  <DialogDescription>
                    Configurez votre aventure et invitez des joueurs à se joindre à vous.
                  </DialogDescription>
                </DialogHeader>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-fantasy-darkPurple">Nom de l'aventure</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="ex: La Quête de l'Épée Légendaire" 
                              className="border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-fantasy-darkPurple">Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Décrivez l'aventure et donnez quelques détails sur le monde..." 
                              className="min-h-[100px] border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                              {...field} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="max_players"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-fantasy-darkPurple">Nombre de joueurs max</FormLabel>
                            <FormControl>
                              <Select 
                                onValueChange={(value) => field.onChange(parseInt(value))} 
                                defaultValue={field.value.toString()}
                              >
                                <SelectTrigger className="border-fantasy-darkPurple/30 focus:border-fantasy-purple">
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                                <SelectContent>
                                  {[2, 3, 4, 5, 6, 7, 8].map(num => (
                                    <SelectItem key={num} value={num.toString()}>{num} joueurs</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="character_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-fantasy-darkPurple">Votre personnage</FormLabel>
                            <FormControl>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="border-fantasy-darkPurple/30 focus:border-fantasy-purple">
                                  <SelectValue placeholder="Choisissez un personnage" />
                                </SelectTrigger>
                                <SelectContent>
                                  {mockPlayerCharacters.map(character => (
                                    <SelectItem key={character.id} value={character.id.toString()}>
                                      {character.name} (Niv. {character.level} {character.class})
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        type="submit" 
                        className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold"
                      >
                        Créer la session
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSessions.map(session => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500 mb-4">Aucune session ne correspond à votre recherche</p>
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
                onClick={() => setIsDialogOpen(true)}
                className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white"
              >
                Créer votre première session
              </Button>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

const SessionCard = ({ session }: { session: any }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="overflow-hidden border-fantasy-purple/20 hover:shadow-md transition-shadow">
      <div className="h-40 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <Scroll size={48} />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
          <Badge variant={session.status === 'active' ? 'default' : 'secondary'} className="bg-fantasy-gold text-fantasy-darkPurple">
            {session.status === 'active' ? 'En cours' : 'En préparation'}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-fantasy-darkPurple">{session.name}</CardTitle>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <Calendar size={16} className="mr-1" />
          <span>Créée le {session.created_at}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-gray-700 mb-4">
          {session.description.length > 120 
            ? `${session.description.substring(0, 120)}...` 
            : session.description
          }
        </p>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-1" />
            <span>{session.players}/{session.max_players} joueurs</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span>{session.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 col-span-2">
            <Clock size={16} className="mr-1" />
            <span>Prochaine session: {session.next_session === 'À déterminer' ? session.next_session : `${session.next_session.split(' ')[0]} à ${session.next_session.split(' ')[1]}`}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end pt-2 border-t border-gray-100">
        <Button 
          className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple"
          onClick={() => navigate(`/game-session/${session.id}`)}
        >
          <PlayCircle size={18} className="mr-2" /> Rejoindre
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Sessions;
