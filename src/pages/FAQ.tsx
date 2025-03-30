
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-8 text-center">Foire Aux Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Qu'est-ce que DungeonAI Master ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                DungeonAI Master est une plateforme de jeu de rôle en ligne qui utilise une intelligence artificielle avancée pour jouer le rôle du Maître de Jeu (MJ). 
                Vous pouvez créer des personnages, rejoindre des sessions avec vos amis, et vivre des aventures épiques sans avoir besoin d'un MJ humain.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Faut-il connaître les règles de D&D pour jouer ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Non, vous n'avez pas besoin de connaître les règles à l'avance. Notre IA guide les nouveaux joueurs et explique les règles au fur et à mesure. 
                Elle prend en charge les calculs complexes et vous permet de vous concentrer sur l'histoire et vos décisions. Nous recommandons toutefois de consulter notre Guide du Débutant pour les concepts de base.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Comment fonctionne le système multijoueur ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Lorsque vous créez une session de jeu, vous recevez un lien que vous pouvez partager avec vos amis. Ils peuvent rejoindre votre session en cliquant sur ce lien et en se connectant avec leur compte. 
                Tous les joueurs et leurs actions sont synchronisés en temps réel, ce qui permet une expérience de jeu fluide même à distance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                L'IA peut-elle créer des aventures personnalisées ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Absolument ! Notre IA peut générer des aventures uniques basées sur vos préférences. Vous pouvez spécifier le thème, le niveau de difficulté, le cadre (donjon, forêt, ville, etc.), et même intégrer des éléments narratifs spécifiques. 
                L'IA s'adapte également à vos décisions pendant le jeu, rendant chaque aventure véritablement unique.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Puis-je utiliser mon personnage dans différentes sessions ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Oui, vous pouvez utiliser le même personnage dans différentes sessions. L'IA garde une trace des statistiques, de l'équipement et de l'expérience accumulée de votre personnage. 
                Vous pouvez ainsi faire évoluer votre héros à travers plusieurs aventures.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Le service est-il gratuit ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Nous proposons une version gratuite avec des fonctionnalités de base et des limitations sur le nombre de sessions et de personnages. 
                Pour une expérience complète, nous proposons un abonnement premium qui inclut des fonctionnalités avancées comme des aventures plus complexes, 
                des outils de personnalisation supplémentaires et la possibilité de sauvegarder un nombre illimité de personnages et de sessions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Comment puis-je lancer les dés pendant une partie ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Pendant une session de jeu, vous pouvez utiliser notre système de lancer de dés virtuel. Il suffit de cliquer sur l'icône de dé et de sélectionner le type de dé souhaité (d4, d6, d8, d10, d12, d20, etc.). 
                Vous pouvez également utiliser des commandes textuelles comme "/roll 1d20+5" pour lancer un dé à 20 faces avec un bonus de +5.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Puis-je jouer sur mobile ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Oui, DungeonAI Master est entièrement responsive et fonctionne sur tous les appareils, y compris les smartphones et les tablettes. 
                L'interface s'adapte automatiquement à la taille de votre écran pour une expérience optimale.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                Comment puis-je contacter le support ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Vous pouvez contacter notre équipe de support en envoyant un email à support@dungeonaimaster.com ou en utilisant le formulaire de contact disponible sur notre page Support. 
                Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
