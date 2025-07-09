
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProposalWorkspace = () => {
  const { t } = useLanguage();
  const [selectedFunder, setSelectedFunder] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [proposalText, setProposalText] = useState("");

  const funders = [
    "Community Foundation",
    "United Way",
    "Ford Foundation",
    "Robert Wood Johnson Foundation"
  ];

  const programs = [
    "Maternal Health Initiative",
    "Youth Education Program",
    "Community Building Project",
    "Housing Assistance Program"
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("proposalWorkspace")}</h1>
        
        {/* Selection Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("selectFunder")}</label>
            <select
              value={selectedFunder}
              onChange={(e) => setSelectedFunder(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">{t("selectFunder")}</option>
              {funders.map(funder => (
                <option key={funder} value={funder}>{funder}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("selectProgram")}</label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">{t("selectProgram")}</option>
              {programs.map(program => (
                <option key={program} value={program}>{program}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Proposal Editor */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Proposal Draft</h2>
          </div>
          
          <div className="p-6">
            <textarea
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              placeholder="Your proposal content will be generated here based on the selected funder and program..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="p-6 border-t border-gray-200 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              {t("exportGoogleDoc")}
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
              {t("saveDraft")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalWorkspace;
