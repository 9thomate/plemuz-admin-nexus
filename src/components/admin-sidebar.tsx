
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  BarChart3,
  Users,
  Music,
  DollarSign,
  Shield,
  Settings,
  HeadphonesIcon,
  TrendingUp,
  CreditCard,
  MessageSquare,
  Database,
  Webhook,
  Sun,
  Moon,
  Monitor,
  Menu,
  X
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/lib/theme-provider"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    group: "Overview"
  },
  {
    title: "User Management",
    url: "/users",
    icon: Users,
    group: "Management"
  },
  {
    title: "Content Management",
    url: "/content",
    icon: Music,
    group: "Management"
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: TrendingUp,
    group: "Insights"
  },
  {
    title: "Financial",
    url: "/financial",
    icon: DollarSign,
    group: "Finance"
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: CreditCard,
    group: "Finance"
  },
  {
    title: "System Admin",
    url: "/system",
    icon: Settings,
    group: "System"
  },
  {
    title: "Content Moderation",
    url: "/moderation",
    icon: MessageSquare,
    group: "System"
  },
  {
    title: "Security",
    url: "/security",
    icon: Shield,
    group: "System"
  },
  {
    title: "Support",
    url: "/support",
    icon: HeadphonesIcon,
    group: "System"
  },
  {
    title: "Data Management",
    url: "/data",
    icon: Database,
    group: "System"
  },
  {
    title: "API & Integration",
    url: "/integrations",
    icon: Webhook,
    group: "System"
  }
]

const groupedItems = menuItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = []
  }
  acc[item.group].push(item)
  return acc
}, {} as Record<string, typeof menuItems>)

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const { setTheme, theme } = useTheme()
  const currentPath = location.pathname
  
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `w-full justify-start transition-colors text-sidebar-foreground ${
      isActive 
        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" 
        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="gap-0">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <img 
                src="/lovable-uploads/7d190d36-6db2-483a-9a90-d937e99b11cf.png" 
                alt="Plemuz" 
                className="w-6 h-6"
              />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-gradient">Plemuz</h1>
                <p className="text-xs text-muted-foreground">Admin Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Groups */}
        {Object.entries(groupedItems).map(([groupName, items]) => (
          <SidebarGroup key={groupName}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                {groupName}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end 
                        className={getNavCls}
                        title={collapsed ? item.title : undefined}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span className="text-sidebar-foreground">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Theme Toggle */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size={collapsed ? "icon" : "default"}
                className="w-full border-sidebar-border bg-sidebar-background text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                {!collapsed && <span className="ml-2 text-sidebar-foreground">Theme</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border-border">
              <DropdownMenuItem onClick={() => setTheme("light")} className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="text-popover-foreground hover:bg-accent hover:text-accent-foreground">
                <Monitor className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
