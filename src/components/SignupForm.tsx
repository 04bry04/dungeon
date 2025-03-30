
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  pseudo: z.string().min(3, "Le pseudo doit contenir au moins 3 caractères"),
});

type FormData = z.infer<typeof formSchema>;

interface SignupFormProps {
  onSignup?: () => void;
}

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      pseudo: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Ici, nous simulerons une soumission réussie
      // Dans une version future, cela sera connecté à votre backend MySQL
      console.log('Données d\'inscription:', data);
      
      // Simulation d'un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      form.reset();
      
      // Si un callback onSignup est fourni, l'appeler après un court délai
      if (onSignup) {
        setTimeout(onSignup, 1500);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="scroll-container p-6 bg-fantasy-parchment relative max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-fantasy-darkPurple text-center">
        Rejoignez l'Aventure
      </h3>
      
      {isSuccess ? (
        <div className="text-center py-4">
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            Inscription réussie ! Nous vous contacterons dès que l'aventure pourra commencer.
          </div>
          <Button 
            onClick={() => setIsSuccess(false)}
            className="bg-fantasy-purple hover:bg-fantasy-purple/80 text-white"
          >
            S'inscrire avec une autre adresse
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="pseudo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-fantasy-darkPurple">Nom d'aventurier</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Entrez votre pseudo" 
                      className="border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-fantasy-red" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-fantasy-darkPurple">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Entrez votre email" 
                      type="email" 
                      className="border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-fantasy-red" />
                </FormItem>
              )}
            />
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold py-6 cta-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Inscription en cours...' : 'Commencer l\'aventure'}
              </Button>
            </div>
            
            <p className="text-sm text-fantasy-darkPurple/70 text-center pt-2">
              En vous inscrivant, vous rejoignez une communauté de joueurs passionnés prêts à vivre des aventures épiques guidées par notre IA.
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default SignupForm;
