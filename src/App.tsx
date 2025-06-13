
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/lib/theme-provider";
import { AdminSidebar } from "@/components/admin-sidebar";
import { AdminHeader } from "@/components/admin-header";
import Index from "./pages/Index";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="plemuz-admin-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
              <AdminSidebar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/users" element={<Users />} />
                    {/* Placeholder routes for other sections */}
                    <Route path="/content" element={<div className="p-6"><h1 className="text-2xl font-bold">Content Management - Coming Soon</h1></div>} />
                    <Route path="/analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics - Coming Soon</h1></div>} />
                    <Route path="/financial" element={<div className="p-6"><h1 className="text-2xl font-bold">Financial Management - Coming Soon</h1></div>} />
                    <Route path="/subscriptions" element={<div className="p-6"><h1 className="text-2xl font-bold">Subscriptions - Coming Soon</h1></div>} />
                    <Route path="/system" element={<div className="p-6"><h1 className="text-2xl font-bold">System Administration - Coming Soon</h1></div>} />
                    <Route path="/moderation" element={<div className="p-6"><h1 className="text-2xl font-bold">Content Moderation - Coming Soon</h1></div>} />
                    <Route path="/security" element={<div className="p-6"><h1 className="text-2xl font-bold">Security - Coming Soon</h1></div>} />
                    <Route path="/support" element={<div className="p-6"><h1 className="text-2xl font-bold">Support - Coming Soon</h1></div>} />
                    <Route path="/data" element={<div className="p-6"><h1 className="text-2xl font-bold">Data Management - Coming Soon</h1></div>} />
                    <Route path="/integrations" element={<div className="p-6"><h1 className="text-2xl font-bold">API & Integration - Coming Soon</h1></div>} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
