
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">Conditions d'utilisation</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Bienvenue sur DungeonAI Master. Les présentes conditions d'utilisation régissent votre utilisation de notre site web et de nos services.
              En accédant à notre site ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">1. Utilisation du Service</h2>
            <p className="mb-4">
              DungeonAI Master est une plateforme de jeu de rôle en ligne qui utilise l'intelligence artificielle pour faciliter les parties de Donjons et Dragons.
              Vous devez être âgé d'au moins 13 ans pour utiliser notre service. Si vous avez moins de 18 ans, vous devez avoir l'autorisation d'un parent ou d'un tuteur légal.
            </p>
            <p className="mb-4">
              Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe, et vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">2. Contenu de l'Utilisateur</h2>
            <p className="mb-4">
              Notre service vous permet de créer, télécharger, publier et partager du contenu. Vous conservez tous les droits sur le contenu que vous créez, mais vous nous accordez une licence mondiale, non exclusive, transférable, sous-licenciable et libre de redevance pour utiliser, reproduire, modifier, adapter, publier, traduire, distribuer et afficher ce contenu.
            </p>
            <p className="mb-4">
              Vous vous engagez à ne pas publier de contenu illégal, offensant, menaçant, diffamatoire, ou qui enfreint les droits de propriété intellectuelle d'autrui. Nous nous réservons le droit de supprimer tout contenu qui, selon nous, viole ces conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">3. Propriété Intellectuelle</h2>
            <p className="mb-4">
              Le service et son contenu original, ses fonctionnalités et sa conception sont la propriété exclusive de DungeonAI Master et sont protégés par les lois internationales sur le droit d'auteur, les marques, les brevets, les secrets commerciaux et autres lois sur la propriété intellectuelle.
            </p>
            <p className="mb-4">
              "Donjons et Dragons" et "D&D" sont des marques déposées de Wizards of the Coast LLC. DungeonAI Master n'est pas affilié à Wizards of the Coast LLC.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">4. Abonnements et Paiements</h2>
            <p className="mb-4">
              Certaines parties de notre service sont proposées sur la base d'un abonnement payant. Si vous choisissez de vous abonner à ces services, vous acceptez de nous fournir des informations de paiement exactes et complètes. Vous nous autorisez également à facturer votre moyen de paiement pour l'abonnement choisi.
            </p>
            <p className="mb-4">
              Les abonnements sont automatiquement renouvelés sauf si vous les annulez avant la date de renouvellement. Vous pouvez annuler votre abonnement à tout moment dans les paramètres de votre compte.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">5. Limitation de Responsabilité</h2>
            <p className="mb-4">
              Dans toute la mesure permise par la loi applicable, DungeonAI Master ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus, que ces dommages soient prévisibles ou non, et qu'ils aient été informés ou non de la possibilité de tels dommages.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">6. Modifications des Conditions</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Si nous apportons des modifications importantes, nous vous en informerons par email ou par une notification sur notre site. Votre utilisation continue du service après ces modifications constitue votre acceptation des nouvelles conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">7. Loi Applicable</h2>
            <p className="mb-4">
              Ces conditions sont régies par les lois françaises, sans égard aux principes de conflits de lois. Tout litige relatif à ces conditions ou à votre utilisation du service sera soumis à la compétence exclusive des tribunaux de Paris, France.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">8. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant ces conditions, veuillez nous contacter à legal@dungeonaimaster.com.
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

export default TermsOfService;
