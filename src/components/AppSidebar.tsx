
import { Home, FileText, BookOpen, Edit3, Library, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Grant Autofill", url: "/grant-autofill", icon: FileText },
  { title: "Story Recommendations", url: "/story-recommendations", icon: BookOpen },
  { title: "Proposal Workspace", url: "/proposal-workspace", icon: Edit3 },
  { title: "Story Library", url: "/story-library", icon: Library },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">GG</span>
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-gray-900">GrantGenius</h2>
              <p className="text-xs text-gray-500">Grant Writing Assistant</p>
            </div>
          )}
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
