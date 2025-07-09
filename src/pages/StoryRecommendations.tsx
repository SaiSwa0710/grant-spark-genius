
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Heart, GraduationCap, Home, Utensils } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";

const StoryRecommendations = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");

  const stories = [
    {
      id: 1,
      title: "Maria's Educational Journey",
      preview: "Maria came to our literacy program unable to read. Through our comprehensive education services, she not only learned to read but went on to earn her GED and is now pursuing a nursing degree.",
      tags: ["Education", "Success Story", "Adult Learning"],
      topic: "education",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "Safe Housing for the Johnson Family",
      preview: "The Johnson family was facing eviction when they connected with our housing services. We helped them secure stable housing and provided ongoing support that allowed them to rebuild their financial stability.",
      tags: ["Housing", "Family Support", "Stability"],
      topic: "housing",
      icon: Home,
    },
    {
      id: 3,
      title: "Maternal Health Success in Our Community",
      preview: "Our maternal health program supported 45 expecting mothers last year, resulting in 100% healthy births and connecting families with ongoing pediatric care and nutrition services.",
      tags: ["Maternal Health", "Healthcare", "Community Impact"],
      topic: "healthcare",
      icon: Heart,
    },
    {
      id: 4,
      title: "Food Security Initiative Results",
      preview: "Through our community garden and food pantry programs, we've reduced food insecurity by 35% in our target neighborhoods, serving over 500 families monthly with fresh, nutritious food.",
      tags: ["Nutrition", "Food Security", "Community Garden"],
      topic: "nutrition",
      icon: Utensils,
    },
  ];

  const filteredStories = selectedTopic === "all" 
    ? stories 
    : stories.filter(story => story.topic === selectedTopic);

  const handleCopyToDraft = (story: any) => {
    toast({
      title: "Story copied to draft",
      description: `"${story.title}" has been added to your proposal workspace.`,
    });
  };

  return (
    <div className="flex-1 bg-white">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Story Recommendations</h1>
            <p className="text-gray-600">Find success stories that match your grant needs</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Filter by topic:</label>
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-48 border-gray-300">
              <SelectValue placeholder="Select topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Topics</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="housing">Housing</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="nutrition">Nutrition</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStories.map((story) => (
            <Card key={story.id} className="border border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <story.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  {story.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{story.preview}</p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  onClick={() => handleCopyToDraft(story)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Draft
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No stories found for the selected topic.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryRecommendations;
