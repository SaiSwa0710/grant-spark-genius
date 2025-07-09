
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Heart, GraduationCap, Home, Utensils, Users } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";

const StoryLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingStory, setIsAddingStory] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const stories = [
    {
      id: 1,
      title: "Maria's Educational Journey",
      preview: "Maria came to our literacy program unable to read. Through our comprehensive education services, she not only learned to read but went on to earn her GED...",
      content: "Maria came to our literacy program unable to read. Through our comprehensive education services, she not only learned to read but went on to earn her GED and is now pursuing a nursing degree. Her story exemplifies the transformative power of education and the ripple effects it has on families and communities.",
      tags: ["Education", "Success Story", "Adult Learning", "Career Development"],
      icon: GraduationCap,
      category: "Education",
    },
    {
      id: 2,
      title: "Safe Housing for the Johnson Family",
      preview: "The Johnson family was facing eviction when they connected with our housing services. We helped them secure stable housing and provided ongoing support...",
      content: "The Johnson family was facing eviction when they connected with our housing services. We helped them secure stable housing and provided ongoing support that allowed them to rebuild their financial stability. Today, they are homeowners and active community volunteers.",
      tags: ["Housing", "Family Support", "Stability", "Homeownership"],
      icon: Home,
      category: "Housing",
    },
    {
      id: 3,
      title: "Maternal Health Success in Our Community",
      preview: "Our maternal health program supported 45 expecting mothers last year, resulting in 100% healthy births and connecting families with ongoing pediatric care...",
      content: "Our maternal health program supported 45 expecting mothers last year, resulting in 100% healthy births and connecting families with ongoing pediatric care and nutrition services. The program's holistic approach ensures both immediate health outcomes and long-term family wellness.",
      tags: ["Maternal Health", "Healthcare", "Community Impact", "Family Wellness"],
      icon: Heart,
      category: "Healthcare",
    },
    {
      id: 4,
      title: "Food Security Initiative Results",
      preview: "Through our community garden and food pantry programs, we've reduced food insecurity by 35% in our target neighborhoods...",
      content: "Through our community garden and food pantry programs, we've reduced food insecurity by 35% in our target neighborhoods, serving over 500 families monthly with fresh, nutritious food. The program also provides nutrition education and cooking classes.",
      tags: ["Nutrition", "Food Security", "Community Garden", "Education"],
      icon: Utensils,
      category: "Nutrition",
    },
    {
      id: 5,
      title: "Youth Leadership Development",
      preview: "Our youth program has graduated 150 young leaders who are now active in community organizing and civic engagement...",
      content: "Our youth program has graduated 150 young leaders who are now active in community organizing and civic engagement. These young people are driving positive change in their neighborhoods and inspiring the next generation of community advocates.",
      tags: ["Youth", "Leadership", "Civic Engagement", "Community Organizing"],
      icon: Users,
      category: "Youth Services",
    },
  ];

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddStory = () => {
    if (!newStory.title || !newStory.content) {
      toast({
        title: "Please fill in all required fields",
        description: "Title and content are required to add a new story.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Story added successfully",
      description: `"${newStory.title}" has been added to your story library.`,
    });

    setNewStory({ title: "", content: "", tags: "" });
    setIsAddingStory(false);
  };

  return (
    <div className="flex-1 bg-white">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Story Library</h1>
            <p className="text-gray-600">Manage your collection of success stories and impact narratives</p>
          </div>
          <Dialog open={isAddingStory} onOpenChange={setIsAddingStory}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add New Story
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Story</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Title *
                  </label>
                  <Input
                    placeholder="Enter story title"
                    value={newStory.title}
                    onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Content *
                  </label>
                  <Textarea
                    placeholder="Tell the full story..."
                    value={newStory.content}
                    onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
                    rows={6}
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <Input
                    placeholder="e.g., Education, Success Story, Youth"
                    value={newStory.tags}
                    onChange={(e) => setNewStory({ ...newStory, tags: e.target.value })}
                    className="border-gray-300"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button onClick={handleAddStory} className="bg-blue-600 hover:bg-blue-700">
                    Add Story
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsAddingStory(false)}
                    className="border-gray-300"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search stories by title, content, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card key={story.id} className="border border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <story.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="line-clamp-2">{story.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {story.preview}
                </p>
                <div className="flex flex-wrap gap-1">
                  {story.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                  {story.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      +{story.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No stories found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryLibrary;
