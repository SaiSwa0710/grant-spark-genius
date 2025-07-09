
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const stories = [
  {
    id: 1,
    title: "Maria's Journey to Better Health",
    preview: "Maria, a mother of three, struggled with access to prenatal care until she found our maternal health program...",
    tags: ["Maternal Health", "Community Outreach", "Healthcare Access"]
  },
  {
    id: 2,
    title: "Youth Leadership Program Success",
    preview: "When 16-year-old Jerome joined our after-school program, he was struggling academically...",
    tags: ["Youth Education", "Leadership", "Mentorship"]
  },
  {
    id: 3,
    title: "Building Stronger Neighborhoods",
    preview: "The Riverside Community Garden project brought together 50 families to transform an empty lot...",
    tags: ["Community Building", "Food Security", "Neighborhood Development"]
  },
  {
    id: 4,
    title: "Housing Success Story",
    preview: "The Johnson family was facing eviction when they connected with our housing assistance program...",
    tags: ["Housing", "Family Support", "Crisis Intervention"]
  }
];

const StoryLibrary = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t("storyLibrary")}</h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            {t("addNewStory")}
          </button>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("searchStories")}
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-3">{story.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{story.preview}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {story.tags.length > 2 && (
                  <span className="text-gray-500 text-xs">+{story.tags.length - 2} more</span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                  View
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                  {t("edit")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryLibrary;
