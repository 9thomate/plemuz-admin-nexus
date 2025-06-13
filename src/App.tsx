
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
import ContentManagement from "./pages/ContentManagement";
import Subscriptions from "./pages/Subscriptions";
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
                    <Route path="/content" element={<ContentManagement />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    {/* Enhanced placeholder routes */}
                    <Route path="/analytics" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Analytics Dashboard</h1>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">User Engagement</h3>
                            <p className="text-muted-foreground">Track user activity and engagement metrics</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Revenue Analytics</h3>
                            <p className="text-muted-foreground">Monitor revenue streams and growth</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Content Performance</h3>
                            <p className="text-muted-foreground">Analyze content popularity and trends</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/financial" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Financial Management</h1>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Revenue Tracking</h3>
                            <p className="text-muted-foreground">Monitor all revenue streams and financial metrics</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Expense Management</h3>
                            <p className="text-muted-foreground">Track and manage operational expenses</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/system" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">System Administration</h1>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Server Management</h3>
                            <p className="text-muted-foreground">Monitor server health and performance</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Database Admin</h3>
                            <p className="text-muted-foreground">Manage database operations and backups</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">System Logs</h3>
                            <p className="text-muted-foreground">View and analyze system logs</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/moderation" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Content Moderation</h1>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Flagged Content</h3>
                            <p className="text-muted-foreground">Review content flagged by users or automated systems</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Moderation Queue</h3>
                            <p className="text-muted-foreground">Process pending moderation requests</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/security" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Security Management</h1>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Access Control</h3>
                            <p className="text-muted-foreground">Manage user permissions and access levels</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Security Logs</h3>
                            <p className="text-muted-foreground">Monitor security events and incidents</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Threat Detection</h3>
                            <p className="text-muted-foreground">Automated threat detection and prevention</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/support" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Customer Support</h1>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Support Tickets</h3>
                            <p className="text-muted-foreground">Manage and respond to customer support requests</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Knowledge Base</h3>
                            <p className="text-muted-foreground">Maintain help articles and documentation</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/data" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">Data Management</h1>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Data Backup</h3>
                            <p className="text-muted-foreground">Manage automated backups and recovery</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Data Export</h3>
                            <p className="text-muted-foreground">Export data for analysis and compliance</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Data Privacy</h3>
                            <p className="text-muted-foreground">Manage user data privacy and GDPR compliance</p>
                          </div>
                        </div>
                      </div>
                    } />
                    <Route path="/integrations" element={
                      <div className="p-6 space-y-6">
                        <h1 className="text-3xl font-bold text-gradient">API & Integrations</h1>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">API Management</h3>
                            <p className="text-muted-foreground">Manage API keys, rate limits, and documentation</p>
                          </div>
                          <div className="p-6 bg-card rounded-lg border">
                            <h3 className="font-semibold mb-2 text-foreground">Third-party Integrations</h3>
                            <p className="text-muted-foreground">Configure integrations with external services</p>
                          </div>
                        </div>
                      </div>
                    } />
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
