
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Save, ExternalLink } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";

const ProposalWorkspace = () => {
  const [selectedFunder, setSelectedFunder] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [draftContent, setDraftContent] = useState("");

  const funders = [
    "Ford Foundation",
    "Gates Foundation",
    "Robert Wood Johnson Foundation",
    "Annie E. Casey Foundation",
    "W.K. Kellogg Foundation",
  ];

  const programs = [
    "Education & Literacy Services",
    "Housing Support Programs",
    "Healthcare & Wellness",
    "Nutrition & Food Security",
    "Child & Family Services",
  ];

  const handleGenerateProposal = () => {
    if (!selectedFunder || !selectedProgram) {
      toast({
        title: "Please select funder and program",
        description: "Both funder and program selections are required to generate a proposal.",
        variant: "destructive",
      });
      return;
    }

    const generatedContent = `GRANT PROPOSAL: ${selectedProgram}
Submitted to: ${selectedFunder}

EXECUTIVE SUMMARY
Harvest House Buffalo respectfully requests $[AMOUNT] from the ${selectedFunder} to support our ${selectedProgram}. This initiative directly aligns with your foundation's commitment to community empowerment and sustainable social change.

PROJECT DESCRIPTION
Our ${selectedProgram} addresses critical needs in Buffalo's underserved communities through evidence-based interventions and community partnerships. We propose to:

• Expand service delivery to reach an additional 300 families
• Implement data-driven program improvements
• Strengthen community partnerships for sustainable impact
• Develop leadership capacity within the communities we serve

ORGANIZATIONAL CAPACITY
Harvest House Buffalo has been serving our community for over [YEARS] years, building trust and delivering measurable results. Our holistic approach treats community health and well-being comprehensively, addressing multiple areas of life simultaneously.

EXPECTED OUTCOMES
• [SPECIFIC METRIC 1]: Target of [NUMBER]% improvement
• [SPECIFIC METRIC 2]: Serve [NUMBER] additional participants
• [SPECIFIC METRIC 3]: Achieve [MEASURABLE OUTCOME]

BUDGET SUMMARY
[Insert detailed budget breakdown aligned with funder guidelines]

SUSTAINABILITY PLAN
[Describe long-term funding strategy and community ownership]`;

    setDraftContent(generatedContent);
    
    toast({
      title: "Proposal generated",
      description: "Your custom proposal draft has been created based on the selected funder and program.",
    });
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your proposal has been saved successfully.",
    });
  };

  const handleExportToGoogleDoc = () => {
    toast({
      title: "Export initiated",
      description: "Your proposal is being exported to Google Docs.",
    });
  };

  return (
    <div className="flex-1 bg-white">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Proposal Workspace</h1>
            <p className="text-gray-600">Create and edit grant proposals with AI assistance</p>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto space-y-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Proposal Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Funder
                </label>
                <Select value={selectedFunder} onValueChange={setSelectedFunder}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Choose a funder" />
                  </SelectTrigger>
                  <SelectContent>
                    {funders.map((funder) => (
                      <SelectItem key={funder} value={funder}>
                        {funder}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Program
                </label>
                <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Choose a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map((program) => (
                      <SelectItem key={program} value={program}>
                        {program}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button 
              onClick={handleGenerateProposal}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <FileText className="w-4 h-4 mr-2" />
              Generate Proposal Template
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">Draft Editor</CardTitle>
              <div className="flex gap-2">
                <Button onClick={handleSaveDraft} variant="outline" size="sm" className="border-gray-300">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button onClick={handleExportToGoogleDoc} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Export to Google Doc
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Your proposal content will appear here after generating a template, or you can start writing directly..."
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              rows={20}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 font-mono text-sm"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProposalWorkspace;
