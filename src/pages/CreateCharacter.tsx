
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import AppLayout from '@/components/AppLayout';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  race: z.string().min(1, "Veuillez sélectionner une race"),
  class: z.string().min(1, "Veuillez sélectionner une classe"),
  level: z.coerce.number().int().min(1).max(20),
  strength: z.coerce.number().int().min(3).max(20),
  dexterity: z.coerce.number().int().min(3).max(20),
  constitution: z.coerce.number().int().min(3).max(20),
  intelligence: z.coerce.number().int().min(3).max(20),
  wisdom: z.coerce.number().int().min(3).max(20),
  charisma: z.coerce.number().int().min(3).max(20),
  background: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const races = [
  { id: 'human', name: 'Humain' },
  { id: 'elf', name: 'Elfe' },
  { id: 'dwarf', name: 'Nain' },
  { id: 'halfling', name: 'Halfelin' },
  { id: 'gnome', name: 'Gnome' },
  { id: 'dragonborn', name: 'Drakéide' },
  { id: 'tiefling', name: 'Tieffelin' },
  { id: 'half-elf', name: 'Demi-Elfe' },
  { id: 'half-orc', name: 'Demi-Orc' },
];

const classes = [
  { id: 'barbarian', name: 'Barbare' },
  { id: 'bard', name: 'Barde' },
  { id: 'cleric', name: 'Clerc' },
  { id: 'druid', name: 'Druide' },
  { id: 'fighter', name: 'Guerrier' },
  { id: 'monk', name: 'Moine' },
  { id: 'paladin', name: 'Paladin' },
  { id: 'ranger', name: 'Rôdeur' },
  { id: 'rogue', name: 'Roublard' },
  { id: 'sorcerer', name: 'Ensorceleur' },
  { id: 'warlock', name: 'Occultiste' },
  { id: 'wizard', name: 'Magicien' },
];

const CreateCharacter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      race: '',
      class: '',
      level: 1,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      background: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simuler une requête API (à remplacer par une vraie API)
      console.log('Données du personnage:', data);
      
      // Délai simulé
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Personnage créé !",
        description: `${data.name} est prêt à partir à l'aventure.`,
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Character creation error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de créer le personnage. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">
          Créer votre personnage
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-fantasy-purple/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Informations de base */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-fantasy-darkPurple">Identité</h2>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom du personnage</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nom de votre personnage" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="race"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Race</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choisir une race" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {races.map(race => (
                              <SelectItem key={race.id} value={race.id}>
                                {race.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Classe</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choisir une classe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {classes.map(cls => (
                              <SelectItem key={cls.id} value={cls.id}>
                                {cls.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Niveau</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1}
                            max={20}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Caractéristiques */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-fantasy-darkPurple">Caractéristiques</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="strength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Force</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="dexterity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dextérité</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="constitution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Constitution</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="intelligence"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Intelligence</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="wisdom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sagesse</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="charisma"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Charisme</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={3}
                              max={20}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              {/* Histoire du personnage */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-fantasy-darkPurple">Histoire</h2>
                
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Historique du personnage</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez brièvement l'histoire de votre personnage..." 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Création en cours...' : 'Créer le personnage'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default CreateCharacter;
