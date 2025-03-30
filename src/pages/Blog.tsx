
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User } from "lucide-react";

// Articles de blog fictifs
const blogPosts = [
  {
    id: 1,
    title: "Comment créer un personnage D&D inoubliable",
    excerpt: "Découvrez les secrets pour créer un personnage avec une histoire riche et des traits de personnalité mémorables.",
    author: "Elminster Sage",
    date: "12 mai 2023",
    category: "Création de personnage",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Les 10 pièges les plus mortels pour vos donjons",
    excerpt: "Une liste des pièges les plus sournois et créatifs pour surprendre vos joueurs lors de votre prochaine aventure.",
    author: "Grimgor le Rusé",
    date: "24 avril 2023",
    category: "Astuces de MJ",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Roleplay avancé : donner vie à votre personnage",
    excerpt: "Techniques et conseils pour incarner votre personnage avec authenticité et créer des moments mémorables.",
    author: "Lyra Voixdouce",
    date: "8 mars 2023",
    category: "Roleplay",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Comprendre les classes de D&D : le Barde",
    excerpt: "Un guide complet sur la classe du Barde : ses capacités, son roleplay et comment en tirer le meilleur parti.",
    author: "Mélodie Argentée",
    date: "16 février 2023",
    category: "Classes",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "L'IA comme Maître de Jeu : le futur du JDR",
    excerpt: "Comment l'intelligence artificielle révolutionne le jeu de rôle en offrant des expériences personnalisées et immersives.",
    author: "Jérôme Technicien",
    date: "5 janvier 2023",
    category: "Technologie",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Construire un monde fantasy cohérent",
    excerpt: "Les éléments essentiels pour créer un univers riche, détaillé et logique pour vos aventures de D&D.",
    author: "Morgiane Worldbuilder",
    date: "12 décembre 2022",
    category: "Worldbuilding",
    image: "/placeholder.svg"
  },
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-fantasy-parchment">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-fantasy-darkPurple mb-12 text-center">Blog du Donjon</h1>

        {/* Article à la une */}
        <div className="mb-16">
          <Card className="overflow-hidden border-fantasy-purple/20 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-200 min-h-[300px] flex items-center justify-center">
                <BookOpen size={64} className="text-gray-400" />
              </div>
              <div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-fantasy-purple/10 text-fantasy-purple rounded-full px-3 py-1">
                      {featuredPost.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-fantasy-darkPurple">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-lg">{featuredPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={18} className="mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar size={18} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="text-fantasy-purple hover:text-fantasy-darkPurple font-medium"
                  >
                    Lire l'article complet →
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles réguliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map(post => (
            <Card key={post.id} className="border-fantasy-purple/20 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <BookOpen size={36} className="text-gray-400" />
              </div>
              <CardHeader>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="bg-fantasy-purple/10 text-fantasy-purple rounded-full px-2 py-1">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-fantasy-darkPurple">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <User size={16} className="mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-fantasy-purple hover:text-fantasy-darkPurple font-medium"
                >
                  Lire la suite →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
