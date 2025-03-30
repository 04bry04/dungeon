
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BeginnerGuide = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">Guide du Débutant</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-fantasy-purple mb-4">Bienvenue dans DungeonAI Master !</h2>
            <p className="mb-4">
              Ce guide est destiné aux nouveaux joueurs qui souhaitent découvrir Donjons et Dragons avec l'aide de notre maître de jeu IA. 
              Voici comment débuter votre aventure :
            </p>
            
            <h3 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-3">1. Créer un compte</h3>
            <p className="mb-4">
              Commencez par vous inscrire sur notre plateforme. Choisissez un nom d'aventurier qui vous représente, 
              car c'est ainsi que les autres joueurs vous connaîtront !
            </p>
            
            <h3 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-3">2. Créer votre personnage</h3>
            <p className="mb-4">
              Rendez-vous dans votre tableau de bord et cliquez sur "Créer un personnage". Vous pourrez choisir parmi différentes races
              (humain, elfe, nain, etc.) et classes (guerrier, magicien, rôdeur, etc.). Chaque combinaison offre des capacités uniques.
            </p>
            <div className="bg-fantasy-parchment/50 p-4 rounded-md border border-fantasy-gold/20 mb-6">
              <h4 className="font-semibold text-fantasy-darkPurple mb-2">Conseil pour les débutants :</h4>
              <p>
                Si c'est votre première fois, nous recommandons des classes simples comme le Guerrier ou le Barbare.
                Les Magiciens et Druides ont plus de capacités à gérer, ce qui peut être complexe pour un premier personnage.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-3">3. Rejoindre ou créer une session</h3>
            <p className="mb-4">
              Une fois votre personnage créé, vous pouvez rejoindre une session existante ou en créer une nouvelle. 
              Dans une session, le Maître de Jeu IA vous guidera à travers l'aventure et répondra à vos actions.
            </p>
            
            <h3 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-3">4. Comprendre les bases du jeu</h3>
            <p className="mb-4">
              Donjons et Dragons repose sur quelques concepts fondamentaux :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Jets de dés</strong> : Les actions dans le jeu sont déterminées par des lancers de dés, principalement le d20 (dé à 20 faces).</li>
              <li><strong>Caractéristiques</strong> : Votre personnage a six caractéristiques principales qui déterminent ses capacités (Force, Dextérité, Constitution, Intelligence, Sagesse, Charisme).</li>
              <li><strong>Compétences</strong> : Ce sont des domaines spécifiques où votre personnage peut exceller (comme l'Acrobatie ou la Persuasion).</li>
              <li><strong>Actions</strong> : Pendant le jeu, vous pouvez décrire librement ce que votre personnage fait, et le MJ déterminera les conséquences.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-3">5. Communiquer avec le Maître de Jeu IA</h3>
            <p className="mb-4">
              Notre IA est conçue pour être intuitive. Décrivez simplement ce que vous souhaitez faire, et elle répondra en conséquence. 
              Par exemple : "Je m'approche du marchand et lui demande s'il a vu un homme en cape noire."
            </p>
            
            <div className="bg-fantasy-parchment/50 p-4 rounded-md border border-fantasy-gold/20 my-8">
              <h4 className="font-semibold text-fantasy-darkPurple mb-2">Exemple de session de jeu :</h4>
              <p className="italic mb-2">
                <strong>MJ IA :</strong> "Vous vous trouvez devant l'entrée d'une caverne sombre. Des bruits étranges résonnent à l'intérieur. Que faites-vous ?"
              </p>
              <p className="italic mb-2">
                <strong>Joueur :</strong> "J'allume ma torche et j'entre prudemment dans la caverne, en gardant mon épée à portée de main."
              </p>
              <p className="italic">
                <strong>MJ IA :</strong> "À la lueur de votre torche, vous découvrez que la caverne s'élargit en une grande salle. Des stalactites pendent du plafond, et vous apercevez des traces de pas dans la poussière..."
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button className="bg-fantasy-gold hover:bg-fantasy-gold/80 text-fantasy-darkPurple font-semibold">
              <Link to="/register">Commencer l'aventure</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeginnerGuide;
