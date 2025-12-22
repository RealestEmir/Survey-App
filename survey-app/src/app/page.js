"use client";

import { useState } from "react";
import GeneralInformation from "@/forms/GeneralInformation";
import SafetyAndTrust from "@/forms/SafetyAndTrust";
import IdentityAndBelonging from "@/forms/IdentityAndBelonging";
import CommunityAndSafety from "@/forms/CommunityAndSafety";
import { saveSurveyResponse } from "@/lib/surveyService";

export default function Home() {
  const [currentForm, setCurrentForm] = useState("general");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormDataChange = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await saveSurveyResponse(formData);
      alert("Thank you! Your survey has been submitted.");
      setFormData({});
      setCurrentForm("general");
    } catch (error) {
      alert("Error submitting survey: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const forms = {
    general: (
      <GeneralInformation
        onNext={() => setCurrentForm("safety")}
        onDataChange={handleFormDataChange}
      />
    ),
    safety: (
      <SafetyAndTrust
        onNext={() => setCurrentForm("identity")}
        onPrevious={() => setCurrentForm("general")}
        onDataChange={handleFormDataChange}
      />
    ),
    identity: (
      <IdentityAndBelonging
        onPrevious={() => setCurrentForm("safety")}
        onDataChange={handleFormDataChange}
        onNext={() => setCurrentForm("community")}
      />
    ),
    community: (
      <CommunityAndSafety
        onPrevious={() => setCurrentForm("identity")}
        onDataChange={handleFormDataChange}
      />
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Survey App</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-black rounded-lg p-4">
            {forms[currentForm]}
          </div>
        </div>
      </main>
    </div>
  );
}
