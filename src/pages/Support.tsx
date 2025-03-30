
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

const Support = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-fantasy-purple/20">
                <h2 className="text-xl font-bold text-fantasy-darkPurple mb-4">Informations de contact</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-fantasy-purple mb-1">Email</h3>
                    <p className="text-gray-700">support@dungeonaimaster.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-fantasy-purple mb-1">Discord</h3>
                    <p className="text-gray-700">discord.gg/dungeonaimaster</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-fantasy-purple mb-1">Heures d'assistance</h3>
                    <p className="text-gray-700">Lun-Ven : 9h00 - 18h00</p>
                    <p className="text-gray-700">Sam-Dim : 10h00 - 16h00</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-fantasy-purple mb-2">Liens utiles</h3>
                  <ul className="space-y-2">
                    <li><a href="/faq" className="text-fantasy-darkPurple hover:text-fantasy-purple transition-colors">FAQ</a></li>
                    <li><a href="/beginner-guide" className="text-fantasy-darkPurple hover:text-fantasy-purple transition-colors">Guide du débutant</a></li>
                    <li><a href="/blog" className="text-fantasy-darkPurple hover:text-fantasy-purple transition-colors">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
                <h1 className="text-2xl font-bold text-fantasy-darkPurple mb-6">Contactez-nous</h1>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-fantasy-darkPurple">Nom</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Votre nom" 
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
                                placeholder="Votre email" 
                                type="email" 
                                className="border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-fantasy-red" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-fantasy-darkPurple">Sujet</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-fantasy-darkPurple/30 focus:border-fantasy-purple">
                                <SelectValue placeholder="Sélectionnez un sujet" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="question">Question générale</SelectItem>
                              <SelectItem value="bug">Signaler un bug</SelectItem>
                              <SelectItem value="feature">Suggestion de fonctionnalité</SelectItem>
                              <SelectItem value="account">Problème de compte</SelectItem>
                              <SelectItem value="billing">Facturation</SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-fantasy-red" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-fantasy-darkPurple">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Décrivez votre problème ou question..." 
                              className="min-h-[150px] border-fantasy-darkPurple/30 focus:border-fantasy-purple" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-fantasy-red" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
