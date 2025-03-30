
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">Politique de confidentialité</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Chez DungeonAI Master, nous attachons une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">1. Collecte d'Informations</h2>
            <p className="mb-2">Nous collectons plusieurs types d'informations vous concernant, notamment :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Informations d'identification (nom, adresse e-mail, nom d'utilisateur)</li>
              <li>Informations de paiement (pour les abonnements premium)</li>
              <li>Informations sur votre utilisation de notre service (sessions de jeu, personnages créés, interactions)</li>
              <li>Informations sur votre appareil et votre navigateur</li>
              <li>Cookies et technologies similaires</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">2. Utilisation des Informations</h2>
            <p className="mb-2">Nous utilisons les informations collectées pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fournir, maintenir et améliorer notre service</li>
              <li>Traiter vos transactions et gérer votre compte</li>
              <li>Vous envoyer des informations techniques, des mises à jour, des alertes de sécurité et des messages de support</li>
              <li>Répondre à vos commentaires, questions et demandes</li>
              <li>Surveiller et analyser les tendances, l'utilisation et les activités liées à notre service</li>
              <li>Détecter, prévenir et résoudre les problèmes techniques et de sécurité</li>
              <li>Personnaliser votre expérience de jeu</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">3. Partage des Informations</h2>
            <p className="mb-2">Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations dans les circonstances suivantes :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Avec d'autres utilisateurs dans le cadre des fonctionnalités multijoueurs</li>
              <li>Avec nos fournisseurs de services qui nous aident à fournir notre service</li>
              <li>Si nécessaire pour se conformer à la loi, protéger nos droits, ou prévenir la fraude</li>
              <li>En cas de fusion, vente ou transfert d'actifs, vos informations pourraient être transférées à l'entité acquéreuse</li>
              <li>Avec votre consentement ou selon vos instructions</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">4. Conservation des Données</h2>
            <p className="mb-4">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir notre service et remplir les finalités décrites dans cette politique. 
              Si vous supprimez votre compte, nous supprimerons vos données personnelles, sauf si nous sommes légalement tenus de les conserver.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">5. Sécurité des Données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation et l'altération.
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">6. Vos Droits</h2>
            <p className="mb-2">Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos données personnelles, notamment :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger ou mettre à jour vos données personnelles</li>
              <li>Supprimer vos données personnelles</li>
              <li>Restreindre ou vous opposer au traitement de vos données personnelles</li>
              <li>Transférer vos données personnelles</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, veuillez nous contacter à privacy@dungeonaimaster.com. Nous répondrons à votre demande dans les délais légaux applicables.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">7. Cookies</h2>
            <p className="mb-4">
              Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, comprendre comment notre service est utilisé et personnaliser notre service.
              Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé. Cependant, certaines fonctionnalités de notre service peuvent ne pas fonctionner correctement sans cookies.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">8. Modifications de cette Politique</h2>
            <p className="mb-4">
              Nous pouvons modifier cette politique de confidentialité de temps à autre. Si nous apportons des modifications importantes, nous vous en informerons par email ou par une notification sur notre site.
              Votre utilisation continue du service après ces modifications constitue votre acceptation de la politique de confidentialité révisée.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">9. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à privacy@dungeonaimaster.com.
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

export default PrivacyPolicy;
