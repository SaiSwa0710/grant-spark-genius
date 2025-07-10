
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ar: {
    // Navigation
    dashboard: "لوحة التحكم",
    grantAutofill: "ملء المنحة تلقائياً",
    storyRecommendations: "توصيات القصص",
    proposalWorkspace: "مساحة عمل المقترح",
    storyLibrary: "مكتبة القصص",
    
    // Dashboard
    activeGrants: "المنح النشطة",
    storiesAvailable: "القصص المتاحة",
    hoursSaved: "الساعات المحفوظة",
    startNewGrant: "بدء منحة جديدة",
    viewStoryMatches: "عرض مطابقات القصص",
    recentActivity: "النشاط الأخير",
    grantSubmitted: "تم إرسال المنحة إلى مؤسسة المجتمع",
    storyAdded: "تمت إضافة قصة نجاح جديدة",
    proposalDraft: "تم إكمال مسودة المقترح",
    grantCalendar: "تقويم المنح",
    
    // Grant Autofill
    pasteGrantQuestion: "لصق سؤال المنحة",
    aiGeneratedAnswer: "إجابة مُولدة بالذكاء الاصطناعي",
    regenerate: "إعادة توليد",
    approve: "موافقة",
    copy: "نسخ",
    
    // Story Recommendations
    filterByTopic: "تصفية حسب الموضوع",
    allTopics: "جميع المواضيع",
    maternalHealth: "صحة الأمهات",
    youthEducation: "تعليم الشباب",
    communityBuilding: "بناء المجتمع",
    recommendedStories: "القصص الموصى بها",
    copyToDraft: "نسخ إلى المسودة",
    
    // Proposal Workspace
    selectFunder: "اختيار الممول",
    selectProgram: "اختيار البرنامج",
    exportGoogleDoc: "تصدير كمستند جوجل",
    saveDraft: "حفظ المسودة",
    
    // Story Library
    searchStories: "البحث في القصص...",
    addNewStory: "إضافة قصة جديدة",
    
    // Common
    search: "بحث",
    filter: "تصفية",
    save: "حفظ",
    cancel: "إلغاء",
    edit: "تحرير",
    delete: "حذف",
  },
  bn: {
    // Navigation
    dashboard: "ড্যাশবোর্ড",
    grantAutofill: "গ্রান্ট অটোফিল",
    storyRecommendations: "গল্প সুপারিশ",
    proposalWorkspace: "প্রস্তাব কর্মক্ষেত্র",
    storyLibrary: "গল্প লাইব্রেরি",
    
    // Dashboard
    activeGrants: "সক্রিয় গ্রান্ট",
    storiesAvailable: "উপলব্ধ গল্প",
    hoursSaved: "সংরক্ষিত ঘন্টা",
    startNewGrant: "নতুন গ্রান্ট শুরু করুন",
    viewStoryMatches: "গল্প মিল দেখুন",
    recentActivity: "সাম্প্রতিক কার্যকলাপ",
    grantSubmitted: "কমিউনিটি ফাউন্ডেশনে গ্রান্ট জমা দেওয়া হয়েছে",
    storyAdded: "নতুন সফলতার গল্প যোগ করা হয়েছে",
    proposalDraft: "প্রস্তাব খসড়া সম্পূর্ণ",
    grantCalendar: "গ্রান্ট ক্যালেন্ডার",
    
    // Grant Autofill
    pasteGrantQuestion: "গ্রান্ট প্রশ্ন পেস্ট করুন",
    aiGeneratedAnswer: "AI-জেনারেটেড উত্তর",
    regenerate: "পুনরায় তৈরি করুন",
    approve: "অনুমোদন",
    copy: "কপি",
    
    // Story Recommendations
    filterByTopic: "বিষয় অনুযায়ী ফিল্টার",
    allTopics: "সব বিষয়",
    maternalHealth: "মাতৃস্বাস্থ্য",
    youthEducation: "যুব শিক্ষা",
    communityBuilding: "কমিউনিটি বিল্ডিং",
    recommendedStories: "সুপারিশকৃত গল্প",
    copyToDraft: "খসড়ায় কপি করুন",
    
    // Proposal Workspace
    selectFunder: "ফান্ডার নির্বাচন করুন",
    selectProgram: "প্রোগ্রাম নির্বাচন করুন",
    exportGoogleDoc: "গুগল ডক হিসেবে এক্সপোর্ট",
    saveDraft: "খসড়া সংরক্ষণ",
    
    // Story Library
    searchStories: "গল্প অনুসন্ধান...",
    addNewStory: "নতুন গল্প যোগ করুন",
    
    // Common
    search: "অনুসন্ধান",
    filter: "ফিল্টার",
    save: "সংরক্ষণ",
    cancel: "বাতিল",
    edit: "সম্পাদনা",
    delete: "মুছে ফেলুন",
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
    grantCalendar: "Zuschuss-Kalender",
    
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
    grantCalendar: "Grant Calendar",
    
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
    grantCalendar: "Calendario de Subvenciones",
    
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
  fa: {
    // Navigation
    dashboard: "داشبورد",
    grantAutofill: "تکمیل خودکار کمک هزینه",
    storyRecommendations: "پیشنهادات داستان",
    proposalWorkspace: "فضای کاری پیشنهاد",
    storyLibrary: "کتابخانه داستان",
    
    // Dashboard
    activeGrants: "کمک هزینه های فعال",
    storiesAvailable: "داستان های موجود",
    hoursSaved: "ساعات ذخیره شده",
    startNewGrant: "شروع کمک هزینه جدید",
    viewStoryMatches: "مشاهده تطبیق داستان ها",
    recentActivity: "فعالیت اخیر",
    grantSubmitted: "کمک هزینه به بنیاد جامعه ارسال شد",
    storyAdded: "داستان موفقیت جدید اضافه شد",
    proposalDraft: "پیش نویس پیشنهاد تکمیل شد",
    grantCalendar: "تقویم کمک هزینه",
    
    // Grant Autofill
    pasteGrantQuestion: "چسباندن سوال کمک هزینه",
    aiGeneratedAnswer: "پاسخ تولید شده توسط هوش مصنوعی",
    regenerate: "تولید مجدد",
    approve: "تایید",
    copy: "کپی",
    
    // Story Recommendations
    filterByTopic: "فیلتر بر اساس موضوع",
    allTopics: "همه موضوعات",
    maternalHealth: "سلامت مادران",
    youthEducation: "آموزش جوانان",
    communityBuilding: "ساخت جامعه",
    recommendedStories: "داستان های پیشنهادی",
    copyToDraft: "کپی به پیش نویس",
    
    // Proposal Workspace
    selectFunder: "انتخاب تامین کننده مالی",
    selectProgram: "انتخاب برنامه",
    exportGoogleDoc: "صادرات به عنوان سند گوگل",
    saveDraft: "ذخیره پیش نویس",
    
    // Story Library
    searchStories: "جستجوی داستان ها...",
    addNewStory: "اضافه کردن داستان جدید",
    
    // Common
    search: "جستجو",
    filter: "فیلتر",
    save: "ذخیره",
    cancel: "لغو",
    edit: "ویرایش",
    delete: "حذف",
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
    grantCalendar: "Calendrier des Subventions",
    
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
  hi: {
    // Navigation
    dashboard: "डैशबोर्ड",
    grantAutofill: "अनुदान स्वतः भरें",
    storyRecommendations: "कहानी सिफारिशें",
    proposalWorkspace: "प्रस्ताव कार्यक्षेत्र",
    storyLibrary: "कहानी पुस्तकालय",
    
    // Dashboard
    activeGrants: "सक्रिय अनुदान",
    storiesAvailable: "उपलब्ध कहानियां",
    hoursSaved: "बचाए गए घंटे",
    startNewGrant: "नया अनुदान शुरू करें",
    viewStoryMatches: "कहानी मिलान देखें",
    recentActivity: "हाल की गतिविधि",
    grantSubmitted: "कम्युनिटी फाउंडेशन को अनुदान जमा किया गया",
    storyAdded: "नई सफलता की कहानी जोड़ी गई",
    proposalDraft: "प्रस्ताव का मसौदा पूरा हुआ",
    grantCalendar: "अनुदान कैलेंडर",
    
    // Grant Autofill
    pasteGrantQuestion: "अनुदान प्रश्न चिपकाएं",
    aiGeneratedAnswer: "AI-जनरेटेड उत्तर",
    regenerate: "पुनर्जनन",
    approve: "स्वीकृत करें",
    copy: "कॉपी करें",
    
    // Story Recommendations
    filterByTopic: "विषय के अनुसार फ़िल्टर करें",
    allTopics: "सभी विषय",
    maternalHealth: "मातृ स्वास्थ्य",
    youthEducation: "युवा शिक्षा",
    communityBuilding: "समुदाय निर्माण",
    recommendedStories: "सुझाई गई कहानियां",
    copyToDraft: "ड्राफ्ट में कॉपी करें",
    
    // Proposal Workspace
    selectFunder: "फंडर का चयन करें",
    selectProgram: "प्रोग्राम का चयन करें",
    exportGoogleDoc: "Google डॉक के रूप में निर्यात करें",
    saveDraft: "ड्राफ्ट सेव करें",
    
    // Story Library
    searchStories: "कहानियां खोजें...",
    addNewStory: "नई कहानी जोड़ें",
    
    // Common
    search: "खोजें",
    filter: "फ़िल्टर",
    save: "सेव करें",
    cancel: "रद्द करें",
    edit: "संपादित करें",
    delete: "हटाएं",
  },
  ja: {
    // Navigation
    dashboard: "ダッシュボード",
    grantAutofill: "助成金自動入力",
    storyRecommendations: "ストーリー推奨",
    proposalWorkspace: "提案ワークスペース",
    storyLibrary: "ストーリーライブラリ",
    
    // Dashboard
    activeGrants: "アクティブな助成金",
    storiesAvailable: "利用可能なストーリー",
    hoursSaved: "節約された時間",
    startNewGrant: "新しい助成金を開始",
    viewStoryMatches: "ストーリーマッチを表示",
    recentActivity: "最近の活動",
    grantSubmitted: "コミュニティ財団に助成金を提出",
    storyAdded: "新しい成功事例を追加",
    proposalDraft: "提案草案完成",
    grantCalendar: "助成金カレンダー",
    
    // Grant Autofill
    pasteGrantQuestion: "助成金質問を貼り付け",
    aiGeneratedAnswer: "AI生成回答",
    regenerate: "再生成",
    approve: "承認",
    copy: "コピー",
    
    // Story Recommendations
    filterByTopic: "トピック別フィルター",
    allTopics: "すべてのトピック",
    maternalHealth: "母性健康",
    youthEducation: "青少年教育",
    communityBuilding: "コミュニティ構築",
    recommendedStories: "推奨ストーリー",
    copyToDraft: "下書きにコピー",
    
    // Proposal Workspace
    selectFunder: "資金提供者を選択",
    selectProgram: "プログラムを選択",
    exportGoogleDoc: "Googleドキュメントとしてエクスポート",
    saveDraft: "下書きを保存",
    
    // Story Library
    searchStories: "ストーリーを検索...",
    addNewStory: "新しいストーリーを追加",
    
    // Common
    search: "検索",
    filter: "フィルター",
    save: "保存",
    cancel: "キャンセル",
    edit: "編集",
    delete: "削除",
  },
  kar: {
    // Navigation
    dashboard: "ဒက်ရှ်ဘုတ်",
    grantAutofill: "ကူညီငွေ အလိုအလျောက်ဖြည့်ခြင်း",
    storyRecommendations: "ဇာတ်လမ်း အကြံပြုချက်များ",
    proposalWorkspace: "အဆိုပြုချက် လုပ်ငန်းခွင်",
    storyLibrary: "ဇာတ်လမ်း စာကြည့်တိုက်",
    
    // Dashboard
    activeGrants: "လှုပ်ရှားနေသော ကူညီငွေများ",
    storiesAvailable: "ရရှိနိုင်သော ဇာတ်လမ်းများ",
    hoursSaved: "ချွေတာနိုင်သော နာရီများ",
    startNewGrant: "ကူညီငွေအသစ် စတင်ပါ",
    viewStoryMatches: "ဇာတ်လမ်း တိုက်ဆိုင်မှုများကို ကြည့်ပါ",
    recentActivity: "မကြာသေးမီက လုပ်ဆောင်ချက်များ",
    grantSubmitted: "ကူညီငွေကို Community Foundation သို့ ပေးပို့ပြီး",
    storyAdded: "အောင်မြင်မှု ဇာတ်လမ်းအသစ် ထည့်ပြီး",
    proposalDraft: "အဆိုပြုချက် မူကြမ်း ပြီးစီး",
    grantCalendar: "ကူညီငွေ ပြက္ခဒိန်",
    
    // Grant Autofill
    pasteGrantQuestion: "ကူညီငွေ မေးခွန်းကို ကူးထည့်ပါ",
    aiGeneratedAnswer: "AI-ထုတ်လုပ်သော အဖြေ",
    regenerate: "ပြန်လည်ထုတ်လုပ်ပါ",
    approve: "အတည်ပြုပါ",
    copy: "ကူးယူပါ",
    
    // Story Recommendations
    filterByTopic: "ခေါင်းစဉ်အလိုက် စစ်ထုတ်ပါ",
    allTopics: "ခေါင်းစဉ် အားလုံး",
    maternalHealth: "မိခင် ကျန်းမာရေး",
    youthEducation: "လူငယ် ပညာရေး",
    communityBuilding: "အသိုင်းအဝိုင်း တည်ဆောက်မှု",
    recommendedStories: "အကြံပြုထားသော ဇာတ်လမ်းများ",
    copyToDraft: "မူကြမ်းသို့ ကူးယူပါ",
    
    // Proposal Workspace
    selectFunder: "ငွေကြေးထောက်ပံ့သူကို ရွေးပါ",
    selectProgram: "ပရိုဂရမ်ကို ရွေးပါ",
    exportGoogleDoc: "Google Doc အဖြစ် ထုတ်ယူပါ",
    saveDraft: "မူကြမ်း သိမ်းဆည်းပါ",
    
    // Story Library
    searchStories: "ဇာတ်လမ်းများ ရှာဖွေပါ...",
    addNewStory: "ဇာတ်လမ်းအသစ် ထည့်ပါ",
    
    // Common
    search: "ရှာဖွေပါ",
    filter: "စစ်ထုတ်ပါ",
    save: "သိမ်းဆည်းပါ",
    cancel: "ပယ်ဖျက်ပါ",
    edit: "တည်းဖြတ်ပါ",
    delete: "ဖျက်ပါ",
  },
  ko: {
    // Navigation
    dashboard: "대시보드",
    grantAutofill: "보조금 자동 입력",
    storyRecommendations: "스토리 추천",
    proposalWorkspace: "제안서 작업공간",
    storyLibrary: "스토리 라이브러리",
    
    // Dashboard
    activeGrants: "활성 보조금",
    storiesAvailable: "이용 가능한 스토리",
    hoursSaved: "절약된 시간",
    startNewGrant: "새 보조금 시작",
    viewStoryMatches: "스토리 매치 보기",
    recentActivity: "최근 활동",
    grantSubmitted: "커뮤니티 재단에 보조금 제출됨",
    storyAdded: "새로운 성공 사례 추가됨",
    proposalDraft: "제안서 초안 완성",
    grantCalendar: "보조금 캘린더",
    
    // Grant Autofill
    pasteGrantQuestion: "보조금 질문 붙여넣기",
    aiGeneratedAnswer: "AI 생성 답변",
    regenerate: "재생성",
    approve: "승인",
    copy: "복사",
    
    // Story Recommendations
    filterByTopic: "주제별 필터",
    allTopics: "모든 주제",
    maternalHealth: "모성 건강",
    youthEducation: "청소년 교육",
    communityBuilding: "커뮤니티 구축",
    recommendedStories: "추천 스토리",
    copyToDraft: "초안에 복사",
    
    // Proposal Workspace
    selectFunder: "펀더 선택",
    selectProgram: "프로그램 선택",
    exportGoogleDoc: "Google 문서로 내보내기",
    saveDraft: "초안 저장",
    
    // Story Library
    searchStories: "스토리 검색...",
    addNewStory: "새 스토리 추가",
    
    // Common
    search: "검색",
    filter: "필터",
    save: "저장",
    cancel: "취소",
    edit: "편집",
    delete: "삭제",
  },
  pt: {
    // Navigation
    dashboard: "Painel",
    grantAutofill: "Preenchimento Automático de Subsídio",
    storyRecommendations: "Recomendações de Histórias",
    proposalWorkspace: "Espaço de Trabalho de Propostas",
    storyLibrary: "Biblioteca de Histórias",
    
    // Dashboard
    activeGrants: "Subsídios Ativos",
    storiesAvailable: "Histórias Disponíveis",
    hoursSaved: "Horas Economizadas",
    startNewGrant: "Iniciar Novo Subsídio",
    viewStoryMatches: "Ver Correspondências de Histórias",
    recentActivity: "Atividade Recente",
    grantSubmitted: "Subsídio enviado para Community Foundation",
    storyAdded: "Nova história de sucesso adicionada",
    proposalDraft: "Rascunho da proposta concluído",
    grantCalendar: "Calendário de Subsídios",
    
    // Grant Autofill
    pasteGrantQuestion: "Colar Pergunta do Subsídio",
    aiGeneratedAnswer: "Resposta Gerada por IA",
    regenerate: "Regenerar",
    approve: "Aprovar",
    copy: "Copiar",
    
    // Story Recommendations
    filterByTopic: "Filtrar por Tópico",
    allTopics: "Todos os Tópicos",
    maternalHealth: "Saúde Materna",
    youthEducation: "Educação Juvenil",
    communityBuilding: "Construção Comunitária",
    recommendedStories: "Histórias Recomendadas",
    copyToDraft: "Copiar para Rascunho",
    
    // Proposal Workspace
    selectFunder: "Selecionar Financiador",
    selectProgram: "Selecionar Programa",
    exportGoogleDoc: "Exportar como Google Doc",
    saveDraft: "Salvar Rascunho",
    
    // Story Library
    searchStories: "Pesquisar histórias...",
    addNewStory: "Adicionar Nova História",
    
    // Common
    search: "Pesquisar",
    filter: "Filtrar",
    save: "Salvar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Excluir",
  },
  ru: {
    // Navigation
    dashboard: "Панель управления",
    grantAutofill: "Автозаполнение гранта",
    storyRecommendations: "Рекомендации историй",
    proposalWorkspace: "Рабочее пространство предложений",
    storyLibrary: "Библиотека историй",
    
    // Dashboard
    activeGrants: "Активные гранты",
    storiesAvailable: "Доступные истории",
    hoursSaved: "Сэкономленные часы",
    startNewGrant: "Начать новый грант",
    viewStoryMatches: "Просмотреть совпадения историй",
    recentActivity: "Недавняя активность",
    grantSubmitted: "Грант отправлен в Community Foundation",
    storyAdded: "Добавлена новая история успеха",
    proposalDraft: "Черновик предложения завершен",
    grantCalendar: "Календарь грантов",
    
    // Grant Autofill
    pasteGrantQuestion: "Вставить вопрос гранта",
    aiGeneratedAnswer: "Ответ, сгенерированный ИИ",
    regenerate: "Перегенерировать",
    approve: "Одобрить",
    copy: "Копировать",
    
    // Story Recommendations
    filterByTopic: "Фильтровать по теме",
    allTopics: "Все темы",
    maternalHealth: "Материнское здоровье",
    youthEducation: "Образование молодежи",
    communityBuilding: "Построение сообщества",
    recommendedStories: "Рекомендуемые истории",
    copyToDraft: "Копировать в черновик",
    
    // Proposal Workspace
    selectFunder: "Выбрать финансиста",
    selectProgram: "Выбрать программу",
    exportGoogleDoc: "Экспортировать как Google Doc",
    saveDraft: "Сохранить черновик",
    
    // Story Library
    searchStories: "Поиск историй...",
    addNewStory: "Добавить новую историю",
    
    // Common
    search: "Поиск",
    filter: "Фильтр",
    save: "Сохранить",
    cancel: "Отменить",
    edit: "Редактировать",
    delete: "Удалить",
  },
  sw: {
    // Navigation
    dashboard: "Dashibodi",
    grantAutofill: "Kujaza Ruzuku Otomatiki",
    storyRecommendations: "Mapendekezo ya Hadithi",
    proposalWorkspace: "Eneo la Kazi la Pendekezo",
    storyLibrary: "Maktaba ya Hadithi",
    
    // Dashboard
    activeGrants: "Ruzuku za Kazi",
    storiesAvailable: "Hadithi Zinazopatikana",
    hoursSaved: "Masaa Yaliyohifadhiwa",
    startNewGrant: "Anza Ruzuku Mpya",
    viewStoryMatches: "Ona Mafanano ya Hadithi",
    recentActivity: "Shughuli za Hivi Karibuni",
    grantSubmitted: "Ruzuku imetumwa kwa Community Foundation",
    storyAdded: "Hadithi mpya ya mafanikio imeongezwa",
    proposalDraft: "Rasimu ya pendekezo imekamilika",
    grantCalendar: "Kalenda ya Ruzuku",
    
    // Grant Autofill
    pasteGrantQuestion: "Bandika Swali la Ruzuku",
    aiGeneratedAnswer: "Jibu Lililotengenezwa na AI",
    regenerate: "Tengeneza Upya",
    approve: "Idhinisha",
    copy: "Nakili",
    
    // Story Recommendations
    filterByTopic: "Chuja kwa Mada",
    allTopics: "Mada Zote",
    maternalHealth: "Afya ya Mama",
    youthEducation: "Elimu ya Vijana",
    communityBuilding: "Ujenzi wa Jamii",
    recommendedStories: "Hadithi Zilizopendekezwa",
    copyToDraft: "Nakili kwenye Rasimu",
    
    // Proposal Workspace
    selectFunder: "Chagua Mfadhili",
    selectProgram: "Chagua Programu",
    exportGoogleDoc: "Hamisha kama Google Doc",
    saveDraft: "Hifadhi Rasimu",
    
    // Story Library
    searchStories: "Tafuta hadithi...",
    addNewStory: "Ongeza Hadithi Mpya",
    
    // Common
    search: "Tafuta",
    filter: "Chuja",
    save: "Hifadhi",
    cancel: "Ghairi",
    edit: "Hariri",
    delete: "Futa",
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
    grantCalendar: "资助日历",
    
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
  zu: {
    // Navigation
    dashboard: "Ibhodi Lesimo",
    grantAutofill: "Ukugcwalisa Isabelo Ngokuzenzakalela",
    storyRecommendations: "Izincomo Zezindaba",
    proposalWorkspace: "Indawo Yokusebenza Yesiphakamiso",
    storyLibrary: "Umtapo Wezindaba",
    
    // Dashboard
    activeGrants: "Izabelo Ezisebenzayo",
    storiesAvailable: "Izindaba Ezitholakalayo",
    hoursSaved: "Amahora Alondolozwayo",
    startNewGrant: "Qala Isabelo Elisha",
    viewStoryMatches: "Bona Ukufanana Kwezindaba",
    recentActivity: "Umsebenzi Wakamuva",
    grantSubmitted: "Isabelo sithunyelwe ku-Community Foundation",
    storyAdded: "Indaba entsha yempumelelo yengeziwe",
    proposalDraft: "Umbhalo wesiphakamiso uphelile",
    grantCalendar: "Ikhalenda Yezabelo",
    
    // Grant Autofill
    pasteGrantQuestion: "Namathisela Umbuzo Wesabelo",
    aiGeneratedAnswer: "Impendulo Eyenziwe yi-AI",
    regenerate: "Khiqiza Kabusha",
    approve: "Vuma",
    copy: "Kopisha",
    
    // Story Recommendations
    filterByTopic: "Hlela Ngesihloko",
    allTopics: "Zonke Izihloko",
    maternalHealth: "Impilo Yomama",
    youthEducation: "Imfundo Yentsha",
    communityBuilding: "Ukwakha Umphakathi",
    recommendedStories: "Izindaba Ezinconyiwe",
    copyToDraft: "Kopishela Kumbhalo",
    
    // Proposal Workspace
    selectFunder: "Khetha Umxhasi",
    selectProgram: "Khetha Uhlelo",
    exportGoogleDoc: "Thumela njenge-Google Doc",
    saveDraft: "Londoloza Umbhalo",
    
    // Story Library
    searchStories: "Sesha izindaba...",
    addNewStory: "Engeza Indaba Entsha",
    
    // Common
    search: "Sesha",
    filter: "Hlela",
    save: "Londoloza",
    cancel: "Khansela",
    edit: "Hlela",
    delete: "Susa",
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
