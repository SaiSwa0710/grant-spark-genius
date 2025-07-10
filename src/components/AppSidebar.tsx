
import { Home, FileText, BookOpen, Edit3, Library, Globe } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: "ar", name: "العربية" },
  { code: "bn", name: "বাংলা" },
  { code: "de", name: "Deutsch" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fa", name: "فارسی" },
  { code: "fr", name: "Français" },
  { code: "hi", name: "हिन्दी" },
  { code: "ja", name: "日本語" },
  { code: "kar", name: "ကညီကျိာ်" },
  { code: "ko", name: "한국어" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "sw", name: "Kiswahili" },
  { code: "zh", name: "中文" },
  { code: "zu", name: "isiZulu" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { currentLanguage, setLanguage, t } = useLanguage();
  const isCollapsed = state === "collapsed";

  const navigationItems = [
    { title: t("dashboard"), url: "/", icon: Home },
    { title: t("grantAutofill"), url: "/grant-autofill", icon: FileText },
    { title: t("storyRecommendations"), url: "/story-recommendations", icon: BookOpen },
    { title: t("proposalWorkspace"), url: "/proposal-workspace", icon: Edit3 },
    { title: t("storyLibrary"), url: "/story-library", icon: Library },
  ];

  const selectedLangName = languages.find(lang => lang.code === currentLanguage)?.name || "English";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">GG</span>
          </div>
          {!isCollapsed && (
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
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.url}>
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
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start gap-3 px-3 py-2 h-auto ${
                        isCollapsed ? "px-2" : ""
                      }`}
                    >
                      <Globe className="w-5 h-5" />
                      {!isCollapsed && <span className="text-sm">{selectedLangName}</span>}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white">
                    {languages.map((language) => (
                      <DropdownMenuItem
                        key={language.code}
                        onClick={() => setLanguage(language.code)}
                        className={`cursor-pointer ${
                          currentLanguage === language.code
                            ? "bg-blue-50 text-blue-700"
                            : ""
                        }`}
                      >
                        {language.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
