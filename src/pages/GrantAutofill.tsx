
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RefreshCw, Check, Sparkles } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";

const GrantAutofill = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!question.trim()) {
      toast({
        title: "Please enter a grant question",
        description: "Add the question you'd like us to help answer.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setAnswer(`Based on Harvest House Buffalo's mission and programs, here's a comprehensive response to your grant question:

Our organization addresses community needs through a holistic approach that includes education, housing, healthcare, nutrition, and child services. We focus on empowering communities for long-term wellness and economic stability.

Key program outcomes include:
• Served 1,250 families in the past year
• 89% of participants in our education programs showed improved literacy scores
• Reduced food insecurity by 35% in our target neighborhoods
• Established partnerships with 15 local organizations

Our evidence-based approach ensures sustainable impact and measurable results that align with your foundation's goals for community development and social equity.`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answer);
    toast({
      title: "Copied to clipboard",
      description: "The generated answer has been copied to your clipboard.",
    });
  };

  const handleApprove = () => {
    toast({
      title: "Answer approved",
      description: "This response has been saved to your proposal workspace.",
    });
  };

  return (
    <div className="flex-1 bg-white">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Grant Autofill</h1>
            <p className="text-gray-600">Generate AI-powered answers to grant questions</p>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Grant Question
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your grant question here... (e.g., 'Describe how your organization addresses community needs and the evidence of your impact.')"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Answer
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {answer && (
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Generated Answer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <p className="whitespace-pre-line text-gray-900 leading-relaxed">{answer}</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleGenerate} variant="outline" className="border-gray-300">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <Button onClick={handleApprove} className="bg-green-600 hover:bg-green-700">
                  <Check className="w-4 h-4 mr-2" />
                  Approve
                </Button>
                <Button onClick={handleCopy} variant="outline" className="border-gray-300">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GrantAutofill;
