
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateCharacter from "./pages/CreateCharacter";
import GameSession from "./pages/GameSession";
import Characters from "./pages/Characters";
import Sessions from "./pages/Sessions";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import BeginnerGuide from "./pages/BeginnerGuide";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import CookiesPolicy from "./pages/CookiesPolicy";
import { AuthProvider } from "./contexts/AuthContext";
import AppLayout from "./components/AppLayout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/app" element={<AppLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-character" element={<CreateCharacter />} />
                <Route path="game-session/:sessionId" element={<GameSession />} />
                <Route path="characters" element={<Characters />} />
                <Route path="sessions" element={<Sessions />} />
                <Route path="chat" element={<Chat />} />
                <Route path="help" element={<Help />} />
                <Route path="beginner-guide" element={<BeginnerGuide />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="support" element={<Support />} />
                <Route path="blog" element={<Blog />} />
                <Route path="terms-of-service" element={<TermsOfService />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="legal-notice" element={<LegalNotice />} />
                <Route path="cookies-policy" element={<CookiesPolicy />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
