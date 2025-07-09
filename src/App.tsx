
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "./pages/Dashboard";
import GrantAutofill from "./pages/GrantAutofill";
import StoryRecommendations from "./pages/StoryRecommendations";
import ProposalWorkspace from "./pages/ProposalWorkspace";
import StoryLibrary from "./pages/StoryLibrary";
import NotFound from "./pages/NotFound";
import { AppSidebar } from "./components/AppSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-gray-50">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/grant-autofill" element={<GrantAutofill />} />
                <Route path="/story-recommendations" element={<StoryRecommendations />} />
                <Route path="/proposal-workspace" element={<ProposalWorkspace />} />
                <Route path="/story-library" element={<StoryLibrary />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
