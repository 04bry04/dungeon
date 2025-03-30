
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-darkPurple to-fantasy-purple flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-fantasy-gold mr-2" />
            <span className="text-2xl font-bold text-white">DungeonAI Master</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-2xl font-bold text-fantasy-darkPurple mb-6 text-center">
            Connexion
          </h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-fantasy-darkPurple">Mot de passe</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Entrez votre mot de passe" 
                        type="password" 
                        className="border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-fantasy-red" />
                  </FormItem>
                )}
              />
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
                </Button>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>
                  Pas encore de compte ? {' '}
                  <Link to="/register" className="text-fantasy-purple hover:underline font-medium">
                    S'inscrire
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-white hover:text-fantasy-gold transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
