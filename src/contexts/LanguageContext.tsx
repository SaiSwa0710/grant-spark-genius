
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    grantAutofill: "Grant Autofill",
    storyRecommendations: "Story Recommendations",
    proposalWorkspace: "Proposal Workspace",
    storyLibrary: "Story Library",
    
    // Dashboard
    activeGrants: "Active Grants",
    storiesAvailable: "Stories Available",
    hoursSaved: "Hours Saved",
    startNewGrant: "Start New Grant",
    viewStoryMatches: "View Story Matches",
    recentActivity: "Recent Activity",
    grantSubmitted: "Grant submitted to Community Foundation",
    storyAdded: "New success story added",
    proposalDraft: "Proposal draft completed",
    
    // Grant Autofill
    pasteGrantQuestion: "Paste Grant Question",
    aiGeneratedAnswer: "AI-Generated Answer",
    regenerate: "Regenerate",
    approve: "Approve",
    copy: "Copy",
    
    // Story Recommendations
    filterByTopic: "Filter by Topic",
    allTopics: "All Topics",
    maternalHealth: "Maternal Health",
    youthEducation: "Youth Education",
    communityBuilding: "Community Building",
    recommendedStories: "Recommended Stories",
    copyToDraft: "Copy to Draft",
    
    // Proposal Workspace
    selectFunder: "Select Funder",
    selectProgram: "Select Program",
    exportGoogleDoc: "Export as Google Doc",
    saveDraft: "Save Draft",
    
    // Story Library
    searchStories: "Search stories...",
    addNewStory: "Add New Story",
    
    // Common
    search: "Search",
    filter: "Filter",
    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
  },
  es: {
    // Navigation
    dashboard: "Panel de Control",
    grantAutofill: "Autocompletar Subvención",
    storyRecommendations: "Recomendaciones de Historias",
    proposalWorkspace: "Espacio de Propuestas",
    storyLibrary: "Biblioteca de Historias",
    
    // Dashboard
    activeGrants: "Subvenciones Activas",
    storiesAvailable: "Historias Disponibles",
    hoursSaved: "Horas Ahorradas",
    startNewGrant: "Iniciar Nueva Subvención",
    viewStoryMatches: "Ver Coincidencias de Historias",
    recentActivity: "Actividad Reciente",
    grantSubmitted: "Subvención enviada a Community Foundation",
    storyAdded: "Nueva historia de éxito agregada",
    proposalDraft: "Borrador de propuesta completado",
    
    // Grant Autofill
    pasteGrantQuestion: "Pegar Pregunta de Subvención",
    aiGeneratedAnswer: "Respuesta Generada por IA",
    regenerate: "Regenerar",
    approve: "Aprobar",
    copy: "Copiar",
    
    // Story Recommendations
    filterByTopic: "Filtrar por Tema",
    allTopics: "Todos los Temas",
    maternalHealth: "Salud Materna",
    youthEducation: "Educación Juvenil",
    communityBuilding: "Construcción Comunitaria",
    recommendedStories: "Historias Recomendadas",
    copyToDraft: "Copiar a Borrador",
    
    // Proposal Workspace
    selectFunder: "Seleccionar Financiador",
    selectProgram: "Seleccionar Programa",
    exportGoogleDoc: "Exportar como Google Doc",
    saveDraft: "Guardar Borrador",
    
    // Story Library
    searchStories: "Buscar historias...",
    addNewStory: "Agregar Nueva Historia",
    
    // Common
    search: "Buscar",
    filter: "Filtrar",
    save: "Guardar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Eliminar",
  },
  fr: {
    // Navigation
    dashboard: "Tableau de Bord",
    grantAutofill: "Remplissage Automatique de Subvention",
    storyRecommendations: "Recommandations d'Histoires",
    proposalWorkspace: "Espace de Propositions",
    storyLibrary: "Bibliothèque d'Histoires",
    
    // Dashboard
    activeGrants: "Subventions Actives",
    storiesAvailable: "Histoires Disponibles",
    hoursSaved: "Heures Économisées",
    startNewGrant: "Commencer Nouvelle Subvention",
    viewStoryMatches: "Voir Correspondances d'Histoires",
    recentActivity: "Activité Récente",
    grantSubmitted: "Subvention soumise à Community Foundation",
    storyAdded: "Nouvelle histoire de succès ajoutée",
    proposalDraft: "Brouillon de proposition terminé",
    
    // Grant Autofill
    pasteGrantQuestion: "Coller Question de Subvention",
    aiGeneratedAnswer: "Réponse Générée par IA",
    regenerate: "Régénérer",
    approve: "Approuver",
    copy: "Copier",
    
    // Story Recommendations
    filterByTopic: "Filtrer par Sujet",
    allTopics: "Tous les Sujets",
    maternalHealth: "Santé Maternelle",
    youthEducation: "Éducation des Jeunes",
    communityBuilding: "Construction Communautaire",
    recommendedStories: "Histoires Recommandées",
    copyToDraft: "Copier au Brouillon",
    
    // Proposal Workspace
    selectFunder: "Sélectionner Financeur",
    selectProgram: "Sélectionner Programme",
    exportGoogleDoc: "Exporter comme Google Doc",
    saveDraft: "Sauvegarder Brouillon",
    
    // Story Library
    searchStories: "Rechercher histoires...",
    addNewStory: "Ajouter Nouvelle Histoire",
    
    // Common
    search: "Rechercher",
    filter: "Filtrer",
    save: "Sauvegarder",
    cancel: "Annuler",
    edit: "Modifier",
    delete: "Supprimer",
  },
  de: {
    // Navigation
    dashboard: "Dashboard",
    grantAutofill: "Zuschuss Automatisch Ausfüllen",
    storyRecommendations: "Story-Empfehlungen",
    proposalWorkspace: "Vorschlag-Arbeitsbereich",
    storyLibrary: "Story-Bibliothek",
    
    // Dashboard
    activeGrants: "Aktive Zuschüsse",
    storiesAvailable: "Verfügbare Geschichten",
    hoursSaved: "Gesparte Stunden",
    startNewGrant: "Neuen Zuschuss Starten",
    viewStoryMatches: "Story-Übereinstimmungen Anzeigen",
    recentActivity: "Letzte Aktivität",
    grantSubmitted: "Zuschuss an Community Foundation eingereicht",
    storyAdded: "Neue Erfolgsgeschichte hinzugefügt",
    proposalDraft: "Vorschlagsentwurf fertiggestellt",
    
    // Grant Autofill
    pasteGrantQuestion: "Zuschussfrage Einfügen",
    aiGeneratedAnswer: "KI-Generierte Antwort",
    regenerate: "Regenerieren",
    approve: "Genehmigen",
    copy: "Kopieren",
    
    // Story Recommendations
    filterByTopic: "Nach Thema Filtern",
    allTopics: "Alle Themen",
    maternalHealth: "Müttergesundheit",
    youthEducation: "Jugendbildung",
    communityBuilding: "Gemeinschaftsaufbau",
    recommendedStories: "Empfohlene Geschichten",
    copyToDraft: "In Entwurf Kopieren",
    
    // Proposal Workspace
    selectFunder: "Geldgeber Auswählen",
    selectProgram: "Programm Auswählen",
    exportGoogleDoc: "Als Google Doc Exportieren",
    saveDraft: "Entwurf Speichern",
    
    // Story Library
    searchStories: "Geschichten suchen...",
    addNewStory: "Neue Geschichte Hinzufügen",
    
    // Common
    search: "Suchen",
    filter: "Filtern",
    save: "Speichern",
    cancel: "Abbrechen",
    edit: "Bearbeiten",
    delete: "Löschen",
  },
  zh: {
    // Navigation
    dashboard: "仪表板",
    grantAutofill: "资助自动填充",
    storyRecommendations: "故事推荐",
    proposalWorkspace: "提案工作区",
    storyLibrary: "故事库",
    
    // Dashboard
    activeGrants: "活跃资助",
    storiesAvailable: "可用故事",
    hoursSaved: "节省时间",
    startNewGrant: "开始新资助",
    viewStoryMatches: "查看故事匹配",
    recentActivity: "最近活动",
    grantSubmitted: "已向社区基金会提交资助申请",
    storyAdded: "添加了新的成功故事",
    proposalDraft: "提案草稿已完成",
    
    // Grant Autofill
    pasteGrantQuestion: "粘贴资助问题",
    aiGeneratedAnswer: "AI生成的答案",
    regenerate: "重新生成",
    approve: "批准",
    copy: "复制",
    
    // Story Recommendations
    filterByTopic: "按主题筛选",
    allTopics: "所有主题",
    maternalHealth: "母婴健康",
    youthEducation: "青少年教育",
    communityBuilding: "社区建设",
    recommendedStories: "推荐故事",
    copyToDraft: "复制到草稿",
    
    // Proposal Workspace
    selectFunder: "选择资助方",
    selectProgram: "选择项目",
    exportGoogleDoc: "导出为Google文档",
    saveDraft: "保存草稿",
    
    // Story Library
    searchStories: "搜索故事...",
    addNewStory: "添加新故事",
    
    // Common
    search: "搜索",
    filter: "筛选",
    save: "保存",
    cancel: "取消",
    edit: "编辑",
    delete: "删除",
  },
};

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
