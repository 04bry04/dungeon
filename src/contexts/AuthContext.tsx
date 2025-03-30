
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

type User = {
  id: number;
  email: string;
  pseudo: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, pseudo: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simuler une vérification d'authentification lors du chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Dans une version future, ceci vérifiera le token JWT dans localStorage
        // et fera une requête API pour valider la session
        const storedUser = localStorage.getItem('dnd_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('dnd_user');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simuler une requête API (à remplacer par une vraie API)
      // Ceci sera connecté à votre backend MySQL plus tard
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Exemple de validation (à remplacer par une validation serveur)
      if (email === 'test@example.com' && password === 'password') {
        const userData = {
          id: 1,
          email: email,
          pseudo: 'TestUser'
        };
        setUser(userData);
        localStorage.setItem('dnd_user', JSON.stringify(userData));
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans votre espace de jeu!",
        });
        return;
      }
      
      throw new Error('Credentials invalid');
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        variant: "destructive",
        title: "Échec de connexion",
        description: "Email ou mot de passe incorrect.",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (email: string, pseudo: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simuler une requête API (à remplacer par une vraie API)
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Exemple d'enregistrement (à remplacer par un vrai enregistrement serveur)
      const userData = {
        id: Math.floor(Math.random() * 10000),
        email,
        pseudo
      };
      
      setUser(userData);
      localStorage.setItem('dnd_user', JSON.stringify(userData));
      
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès!",
      });
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        variant: "destructive",
        title: "Échec d'inscription",
        description: "Impossible de créer votre compte. Veuillez réessayer.",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('dnd_user');
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès.",
    });
  };
  
  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
