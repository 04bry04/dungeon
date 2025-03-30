
import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Dice, Swords, BookOpen, ShieldQuestion, Users, MessageCircle, Wand2 } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-fantasy-darkPurple">Centre d'aide</h1>
            <p className="text-gray-600">Trouvez des réponses à toutes vos questions</p>
          </div>
          
          <div className="relative w-full md:w-[280px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher dans l'aide..." 
              className="pl-10 border-fantasy-purple/30 focus:border-fantasy-purple"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="border-fantasy-purple/20">
              <CardHeader>
                <CardTitle className="text-xl text-fantasy-darkPurple">Catégories</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  <a href="#getting-started" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <BookOpen size={18} className="mr-2" />
                    <span>Pour commencer</span>
                  </a>
                  <a href="#characters" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <Users size={18} className="mr-2" />
                    <span>Personnages</span>
                  </a>
                  <a href="#game-rules" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <Dice size={18} className="mr-2" />
                    <span>Règles du jeu</span>
                  </a>
                  <a href="#combat" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <Swords size={18} className="mr-2" />
                    <span>Combat</span>
                  </a>
                  <a href="#ai-master" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <Wand2 size={18} className="mr-2" />
                    <span>IA Maître de Jeu</span>
                  </a>
                  <a href="#multiplayer" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <MessageCircle size={18} className="mr-2" />
                    <span>Multijoueur</span>
                  </a>
                  <a href="#troubleshooting" className="flex items-center px-3 py-2 rounded-md text-fantasy-darkPurple hover:bg-fantasy-purple/10 hover:text-fantasy-purple transition-colors">
                    <ShieldQuestion size={18} className="mr-2" />
                    <span>Résolution de problèmes</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
            
            <Card className="border-fantasy-purple/20 mt-6">
              <CardHeader>
                <CardTitle className="text-xl text-fantasy-darkPurple">Besoin d'aide ?</CardTitle>
                <CardDescription>Notre équipe est là pour vous aider</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-fantasy-purple text-fantasy-purple hover:bg-fantasy-purple/10"
                    onClick={() => window.open('/support', '_blank')}
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Contacter le support
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-fantasy-purple text-fantasy-purple hover:bg-fantasy-purple/10"
                    onClick={() => window.open('https://discord.gg/dungeonaimaster', '_blank')}
                  >
                    <Users size={18} className="mr-2" />
                    Rejoindre notre Discord
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="bg-white border border-fantasy-purple/20 mb-6">
                <TabsTrigger value="faq" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
                  FAQ
                </TabsTrigger>
                <TabsTrigger value="guides" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
                  Guides
                </TabsTrigger>
                <TabsTrigger value="videos" className="data-[state=active]:bg-fantasy-purple/10 data-[state=active]:text-fantasy-purple">
                  Tutoriels vidéo
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <Card className="border-fantasy-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-fantasy-darkPurple">Questions fréquentes</CardTitle>
                    <CardDescription>Trouvez rapidement des réponses aux questions les plus courantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" id="getting-started">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Comment débuter avec DungeonAI Master ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Pour commencer votre aventure avec DungeonAI Master, suivez ces étapes simples :</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Créez un compte et connectez-vous à la plateforme</li>
                            <li>Rendez-vous dans la section "Personnages" et créez votre premier héros</li>
                            <li>Rejoignez une session existante ou créez-en une nouvelle dans la section "Sessions"</li>
                            <li>Invitez vos amis à rejoindre votre aventure en partageant le lien de session</li>
                            <li>Commencez à jouer avec notre IA Maître de Jeu !</li>
                          </ol>
                          <p className="mt-2">Pour un guide plus détaillé, consultez notre <a href="/beginner-guide" className="text-fantasy-purple hover:underline">Guide du débutant</a>.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" id="characters">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Comment créer et personnaliser mon personnage ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">La création de personnage se fait en quelques étapes :</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Accédez à la section "Personnages" et cliquez sur "Nouveau personnage"</li>
                            <li>Choisissez une race (Humain, Elfe, Nain, etc.) qui détermine certaines caractéristiques</li>
                            <li>Sélectionnez une classe (Guerrier, Magicien, Rôdeur, etc.) qui définit vos capacités</li>
                            <li>Répartissez vos points de caractéristiques (Force, Dextérité, etc.)</li>
                            <li>Choisissez vos compétences, équipement et sorts si applicable</li>
                            <li>Personnalisez l'apparence et l'histoire de votre personnage</li>
                            <li>Enregistrez votre personnage pour l'utiliser dans vos aventures</li>
                          </ol>
                          <p className="mt-2">Vous pouvez modifier votre personnage à tout moment en cliquant sur le bouton "Modifier" sur sa fiche.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" id="game-rules">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Quelles sont les règles de base à connaître ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">DungeonAI Master utilise les règles de base de D&D 5e, avec quelques adaptations pour le jeu en ligne :</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Jets de dés</strong> : Utilisez la commande /roll ou le bouton de dé pour lancer les dés (ex: /roll 1d20+5).</li>
                            <li><strong>Actions</strong> : Pendant votre tour, vous pouvez généralement effectuer une action, une action bonus et un déplacement.</li>
                            <li><strong>Tests de compétence</strong> : Pour tenter une action, lancez un d20 et ajoutez votre modificateur de compétence. Le Maître de Jeu IA détermine la difficulté (DD).</li>
                            <li><strong>Combat</strong> : Le combat se déroule au tour par tour. L'initiative détermine l'ordre des actions.</li>
                            <li><strong>Repos</strong> : Un repos court vous permet de récupérer certaines capacités, tandis qu'un repos long restaure tous vos points de vie et ressources.</li>
                          </ul>
                          <p className="mt-2">Notre IA Maître de Jeu guide les nouveaux joueurs et explique les règles au fur et à mesure.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" id="combat">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Comment fonctionne le système de combat ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Le combat dans DungeonAI Master suit ces étapes :</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Initiative</strong> : Au début du combat, chaque participant lance un d20 + modificateur de Dextérité pour déterminer l'ordre du tour.</li>
                            <li><strong>Tour de combat</strong> : À votre tour, vous pouvez effectuer une action (attaque, lancer un sort, etc.), une action bonus si disponible, et vous déplacer.</li>
                            <li><strong>Attaques</strong> : Pour attaquer, lancez un d20 + votre bonus d'attaque. Si le résultat égale ou dépasse la Classe d'Armure (CA) de la cible, vous touchez.</li>
                            <li><strong>Dégâts</strong> : En cas de touche, lancez les dés de dégâts de votre arme + les modificateurs applicables.</li>
                            <li><strong>Sorts</strong> : Les sorts peuvent nécessiter un jet d'attaque ou permettre un jet de sauvegarde à la cible.</li>
                          </ol>
                          <p className="mt-2">L'IA Maître de Jeu gère les statistiques des ennemis et effectue leurs actions automatiquement.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5" id="ai-master">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Comment interagir avec l'IA Maître de Jeu ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">L'interaction avec notre IA Maître de Jeu est intuitive :</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Décrivez simplement vos actions dans le chat, comme vous le feriez avec un MJ humain.</li>
                            <li>Utilisez des formulations claires comme "J'examine la porte", "Je parle au marchand" ou "J'attaque le gobelin".</li>
                            <li>Posez des questions directes comme "Que vois-je dans cette pièce ?" ou "Quelles informations ai-je sur cet objet ?"</li>
                            <li>Pour les jets de dés, utilisez la commande /roll ou le bouton dédié (ex: /roll 1d20+5).</li>
                            <li>Si vous souhaitez parler hors-jeu, utilisez le préfixe /ooc (ex: "/ooc Pouvons-nous faire une pause ?").</li>
                          </ul>
                          <p className="mt-2">Notre IA s'adapte à votre style de jeu et à vos décisions, créant une expérience personnalisée.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6" id="multiplayer">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Comment jouer avec mes amis ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Pour jouer avec vos amis, suivez ces étapes :</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Créez une session de jeu dans la section "Sessions" ou rejoignez une session existante.</li>
                            <li>Pour inviter des amis, cliquez sur le bouton "Inviter" dans l'interface de la session.</li>
                            <li>Partagez le lien d'invitation généré via e-mail, messagerie ou réseaux sociaux.</li>
                            <li>Vos amis doivent créer un compte et un personnage s'ils n'en ont pas déjà.</li>
                            <li>Une fois connectés à la session, tous les joueurs verront les messages et actions des autres en temps réel.</li>
                          </ol>
                          <p className="mt-2">Vous pouvez communiquer avec les autres joueurs via le chat de la session, en utilisant le préfixe /p pour les messages privés entre joueurs.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-7" id="troubleshooting">
                        <AccordionTrigger className="text-lg font-medium text-fantasy-darkPurple">
                          Que faire en cas de problème technique ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Si vous rencontrez des problèmes techniques :</p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li><strong>Rafraîchissez la page</strong> : Souvent, un simple rafraîchissement peut résoudre les problèmes d'affichage.</li>
                            <li><strong>Vérifiez votre connexion</strong> : Une connexion internet stable est nécessaire pour les fonctionnalités en temps réel.</li>
                            <li><strong>Effacez le cache</strong> : Videz le cache de votre navigateur pour éliminer d'éventuels fichiers corrompus.</li>
                            <li><strong>Essayez un autre navigateur</strong> : Nous recommandons Chrome, Firefox ou Edge à jour.</li>
                            <li><strong>Vérifiez nos canaux</strong> : Consultez notre Twitter ou Discord pour les annonces de maintenance.</li>
                            <li><strong>Contactez le support</strong> : Si le problème persiste, contactez notre équipe via la page Support.</li>
                          </ol>
                          <p className="mt-2">Pour les problèmes spécifiques au jeu (comme des bugs dans une session), utilisez la commande /report dans le chat pour signaler le problème.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="guides">
                <Card className="border-fantasy-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-fantasy-darkPurple">Guides et tutoriels</CardTitle>
                    <CardDescription>Apprenez à maîtriser DungeonAI Master avec nos guides détaillés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a 
                        href="/beginner-guide" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <BookOpen size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Guide du débutant</h3>
                        </div>
                        <p className="text-sm text-gray-600">Tout ce que vous devez savoir pour commencer votre aventure</p>
                      </a>
                      
                      <a 
                        href="#" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <Dice size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Règles de base</h3>
                        </div>
                        <p className="text-sm text-gray-600">Les mécaniques essentielles pour jouer à D&D</p>
                      </a>
                      
                      <a 
                        href="#" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <Users size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Création de personnage</h3>
                        </div>
                        <p className="text-sm text-gray-600">Guide complet pour créer des héros mémorables</p>
                      </a>
                      
                      <a 
                        href="#" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <Swords size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Maîtriser le combat</h3>
                        </div>
                        <p className="text-sm text-gray-600">Tactiques et astuces pour triompher au combat</p>
                      </a>
                      
                      <a 
                        href="#" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <Wand2 size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Magie et sortilèges</h3>
                        </div>
                        <p className="text-sm text-gray-600">Tout sur les sorts et leurs effets</p>
                      </a>
                      
                      <a 
                        href="#" 
                        className="block p-4 border border-fantasy-purple/20 rounded-lg hover:bg-fantasy-purple/5 transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          <MessageCircle size={20} className="text-fantasy-purple mr-2" />
                          <h3 className="font-semibold text-fantasy-darkPurple">Multijoueur</h3>
                        </div>
                        <p className="text-sm text-gray-600">Comment jouer efficacement en groupe</p>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="videos">
                <Card className="border-fantasy-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-fantasy-darkPurple">Tutoriels vidéo</CardTitle>
                    <CardDescription>Apprenez visuellement avec nos guides vidéo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-fantasy-purple/20 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <BookOpen size={36} className="mx-auto mb-2" />
                            <span>Introduction à DungeonAI Master</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-fantasy-darkPurple mb-1">Premiers pas avec DungeonAI</h3>
                          <p className="text-sm text-gray-600 mb-2">07:35 • Mis à jour il y a 2 semaines</p>
                          <p className="text-sm text-gray-700">Découvrez l'interface et les fonctionnalités de base de DungeonAI Master.</p>
                        </div>
                      </div>
                      
                      <div className="border border-fantasy-purple/20 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <Users size={36} className="mx-auto mb-2" />
                            <span>Créer votre premier personnage</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-fantasy-darkPurple mb-1">Guide de création de personnage</h3>
                          <p className="text-sm text-gray-600 mb-2">12:42 • Mis à jour il y a 1 mois</p>
                          <p className="text-sm text-gray-700">Apprenez à créer et personnaliser votre héros étape par étape.</p>
                        </div>
                      </div>
                      
                      <div className="border border-fantasy-purple/20 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <MessageCircle size={36} className="mx-auto mb-2" />
                            <span>Jouer en multijoueur</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-fantasy-darkPurple mb-1">Sessions multijoueur</h3>
                          <p className="text-sm text-gray-600 mb-2">09:18 • Mis à jour il y a 3 semaines</p>
                          <p className="text-sm text-gray-700">Comment créer et rejoindre des sessions avec vos amis.</p>
                        </div>
                      </div>
                      
                      <div className="border border-fantasy-purple/20 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <Wand2 size={36} className="mx-auto mb-2" />
                            <span>Interagir avec l'IA MJ</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-fantasy-darkPurple mb-1">Communication avec l'IA</h3>
                          <p className="text-sm text-gray-600 mb-2">11:05 • Mis à jour il y a 1 semaine</p>
                          <p className="text-sm text-gray-700">Meilleures pratiques pour communiquer avec votre Maître du Jeu IA.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Help;
