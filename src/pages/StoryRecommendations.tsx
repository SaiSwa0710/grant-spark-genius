
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const stories = [
  {
    id: 1,
    title: "Maria's Journey to Better Health",
    preview: "Maria, a mother of three, struggled with access to prenatal care until she found our maternal health program. Through our community health workers and partnerships with local clinics...",
    tags: ["Maternal Health", "Community Outreach", "Healthcare Access"]
  },
  {
    id: 2,
    title: "Youth Leadership Program Success",
    preview: "When 16-year-old Jerome joined our after-school program, he was struggling academically and felt disconnected from his community. Through mentorship and leadership opportunities...",
    tags: ["Youth Education", "Leadership", "Mentorship"]
  },
  {
    id: 3,
    title: "Building Stronger Neighborhoods",
    preview: "The Riverside Community Garden project brought together 50 families to transform an empty lot into a thriving space for fresh food production and community gathering...",
    tags: ["Community Building", "Food Security", "Neighborhood Development"]
  }
];

const StoryRecommendations = () => {
  const { t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState("all");

  const topics = [
    { value: "all", label: t("allTopics") },
    { value: "maternal-health", label: t("maternalHealth") },
    { value: "youth-education", label: t("youthEducation") },
    { value: "community-building", label: t("communityBuilding") }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("storyRecommendations")}</h1>
        
        {/* Filter Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t("filterByTopic")}</label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {topics.map(topic => (
              <option key={topic.value} value={topic.value}>{topic.label}</option>
            ))}
          </select>
        </div>

        {/* Stories Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">{t("recommendedStories")}</h2>
          
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">{story.title}</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  {t("copyToDraft")}
                </button>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{story.preview}</p>
              
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryRecommendations;
