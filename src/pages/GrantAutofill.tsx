
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GrantAutofill = () => {
  const { t } = useLanguage();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleGenerate = () => {
    // Simulate AI response
    setAnswer("Our organization has been serving the Buffalo community for over 15 years, focusing on holistic community development through education, healthcare, and housing initiatives. We have successfully implemented 12 major programs that have directly impacted over 2,500 families in the East Buffalo area...");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("grantAutofill")}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t("pasteGrantQuestion")}</h2>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Describe your organization's mission and impact in the community..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleGenerate}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate Answer
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t("aiGeneratedAnswer")}</h2>
            <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-50 overflow-y-auto">
              {answer || "Generated answer will appear here..."}
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                {t("regenerate")}
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                {t("approve")}
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {t("copy")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantAutofill;
