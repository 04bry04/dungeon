
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">Mentions légales</h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-6 mb-4">1. Éditeur du site</h2>
            <p className="mb-4">
              DungeonAI Master est édité par la société Fantasy Digital Solutions, SAS au capital de 10 000 €, 
              immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, 
              dont le siège social est situé au 42 rue des Aventuriers, 75001 Paris, France.
            </p>
            <p className="mb-4">
              Numéro de TVA intracommunautaire : FR 12 345 678 901<br />
              Directeur de la publication : Galadriel Elfwood<br />
              Email : contact@dungeonaimaster.com<br />
              Téléphone : +33 (0)1 23 45 67 89
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">2. Hébergement</h2>
            <p className="mb-4">
              Le site DungeonAI Master est hébergé par CloudForge, SAS au capital de 150 000 €, 
              immatriculée au Registre du Commerce et des Sociétés de Lyon sous le numéro 987 654 321, 
              dont le siège social est situé au 789 avenue du Cloud, 69000 Lyon, France.
            </p>
            <p className="mb-4">
              Téléphone : +33 (0)4 56 78 90 12
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu de ce site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de Fantasy Digital Solutions à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p className="mb-4">
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Fantasy Digital Solutions.
            </p>
            <p className="mb-4">
              "Donjons et Dragons" et "D&D" sont des marques déposées de Wizards of the Coast LLC. DungeonAI Master n'est pas affilié à Wizards of the Coast LLC.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">4. Données personnelles</h2>
            <p className="mb-4">
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre Politique de Confidentialité disponible <a href="/privacy-policy" className="text-fantasy-purple hover:underline">ici</a>.
            </p>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition et de limitation du traitement. Vous pouvez exercer ces droits en nous contactant à l'adresse suivante : privacy@dungeonaimaster.com.
            </p>
            <p className="mb-4">
              L'utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation. Un cookie est un élément qui ne permet pas d'identifier l'utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Les conditions d'utilisation de ces cookies sont détaillées dans notre Politique de Confidentialité.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">5. Loi applicable et juridiction</h2>
            <p className="mb-4">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">6. Contact</h2>
            <p className="mb-4">
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : legal@dungeonaimaster.com.
            </p>
            
            <p className="mt-8 text-sm">
              Dernière mise à jour : 1er juin 2023
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;
