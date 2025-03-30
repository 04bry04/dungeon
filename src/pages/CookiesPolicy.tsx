
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-fantasy-purple/20">
          <h1 className="text-3xl font-bold text-fantasy-darkPurple mb-6">Politique des Cookies</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Cette politique explique comment DungeonAI Master utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web et utilisez nos services. 
              Elle explique ce que sont ces technologies et pourquoi nous les utilisons, ainsi que vos droits de contrôle concernant notre utilisation de celles-ci.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="mb-4">
              Un cookie est un petit fichier contenant une chaîne de caractères qui est envoyé à votre ordinateur lorsque vous visitez un site web. 
              Lorsque vous revisitez ce site, le cookie permet au site de reconnaître votre navigateur. Les cookies peuvent stocker les préférences de l'utilisateur et d'autres informations.
            </p>
            <p className="mb-4">
              Les cookies peuvent être des cookies "persistants" ou des cookies "de session". Les cookies persistants restent sur votre appareil personnel pendant une période définie dans le cookie. 
              Les cookies de session sont supprimés dès que vous fermez votre navigateur.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">2. Types de cookies que nous utilisons</h2>
            <p className="mb-4">
              Nous utilisons les types de cookies suivants pour diverses raisons :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Cookies essentiels :</strong> Ces cookies sont nécessaires au fonctionnement de notre site web et ne peuvent pas être désactivés dans nos systèmes. 
                Ils sont généralement établis en réponse à des actions que vous effectuez et qui correspondent à une demande de services, comme la définition de vos préférences de confidentialité, 
                la connexion ou le remplissage de formulaires. Vous pouvez configurer votre navigateur pour qu'il bloque ces cookies, mais certaines parties du site ne fonctionneront pas.
              </li>
              <li>
                <strong>Cookies de performance :</strong> Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site. 
                Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs naviguent sur le site. Toutes les informations recueillies par ces cookies sont agrégées et donc anonymes.
              </li>
              <li>
                <strong>Cookies de fonctionnalité :</strong> Ces cookies permettent au site de fournir une fonctionnalité et une personnalisation améliorées. 
                Ils peuvent être établis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement.
              </li>
              <li>
                <strong>Cookies de ciblage :</strong> Ces cookies peuvent être établis par nos partenaires publicitaires. Ils peuvent être utilisés par ces entreprises pour établir un profil de vos intérêts 
                et vous montrer des publicités pertinentes sur d'autres sites. Ils ne stockent pas directement des informations personnelles, mais sont basés sur l'identification unique de votre navigateur et de votre appareil internet.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">3. Comment contrôler les cookies</h2>
            <p className="mb-4">
              Vous pouvez décider d'accepter ou de refuser les cookies. La plupart des navigateurs web acceptent automatiquement les cookies, mais vous pouvez généralement modifier les paramètres de votre navigateur 
              pour refuser les cookies si vous le préférez. Cela peut vous empêcher de profiter pleinement du site web.
            </p>
            <p className="mb-4">
              Vous trouverez ci-dessous des liens vers les instructions pour gérer les paramètres des cookies dans les navigateurs les plus courants :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/windows/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Internet Explorer</a></li>
            </ul>
            <p className="mb-4">
              De plus, de nombreux réseaux publicitaires tiers vous offrent la possibilité de refuser les publicités ciblées. Pour plus d'informations, vous pouvez visiter :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Network Advertising Initiative</a></li>
              <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-fantasy-purple hover:underline">Digital Advertising Alliance</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">4. Autres technologies similaires</h2>
            <p className="mb-4">
              En plus des cookies, nous pouvons utiliser d'autres technologies similaires pour stocker et accéder à des données sur votre appareil, telles que :
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Web beacons :</strong> De petits fichiers graphiques (aussi appelés "pixels espions" ou "GIF invisibles") qui nous permettent, par exemple, de savoir si vous avez visité une page ou ouvert un e-mail.
              </li>
              <li>
                <strong>Stockage local :</strong> Nous pouvons stocker des données localement sur votre appareil en utilisant le stockage local de votre navigateur.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">5. Mises à jour de cette politique</h2>
            <p className="mb-4">
              Nous pouvons mettre à jour cette politique de cookies de temps à autre afin de refléter, par exemple, les changements apportés aux cookies que nous utilisons ou pour d'autres raisons opérationnelles, légales ou réglementaires. 
              Veuillez donc revisiter régulièrement cette politique pour rester informé de notre utilisation des cookies et des technologies connexes.
            </p>
            <p className="mb-4">
              La date en bas de cette page indique quand elle a été mise à jour pour la dernière fois.
            </p>
            
            <h2 className="text-xl font-semibold text-fantasy-darkPurple mt-8 mb-4">6. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant notre utilisation des cookies ou d'autres technologies, veuillez nous contacter à privacy@dungeonaimaster.com.
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

export default CookiesPolicy;
